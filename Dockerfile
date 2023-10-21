# Use an official Go runtime as a parent image
FROM golang:1.21 AS build-env

# Install protoc
RUN apt-get update && apt-get install -y protobuf-compiler

# Install grpc-gateway for Swagger
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
RUN go install github.com/bufbuild/buf/cmd/buf@v1.27.1

WORKDIR /app

COPY . .

RUN buf generate

# # download java
FROM openjdk:11-jdk AS java-builder

# copy everything from working directory of build-env
WORKDIR /app
COPY --from=build-env /app/. .
COPY --from=build-env /app/gen/openapiv2/. .

# Install Swagger Codegen.js
RUN wget https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.27/swagger-codegen-cli-3.0.27.jar -O swagger-codegen-cli.jar

# For each file *.swagger.json, generate the SDK and rename the folder to the file name (without extension)
RUN for file in *.swagger.json; do \
    java -jar swagger-codegen-cli.jar generate -i $file -l javascript -o ./sdk/$(basename $file .swagger.json); \
    done