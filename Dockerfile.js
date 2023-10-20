# Use an official Go runtime as a parent image
FROM golang:1.21 AS build-env

# Install protoc
RUN apt-get update && apt-get install -y protobuf-compiler

# Install grpc-gateway for Swagger
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

# Set the working directory
WORKDIR /go/src/app

# Copy the proto file
COPY system.proto .

RUN mkdir generated

# Generate Go code from proto file
RUN protoc \
    --go_out=./generated \
    --go_opt=paths=source_relative \
    --go-grpc_out=./generated \
    --go-grpc_opt=paths=source_relative \
    system.proto

# Assuming you're using the grpc-gateway v2
RUN protoc \
    --proto_path=. \
    --openapiv2_out=. \
    --openapiv2_opt logtostderr=true \
    system.proto

# download java
FROM openjdk:11-jdk AS java-builder
WORKDIR /go/src/app
COPY --from=build-env /go/src/app/. .

# Generate JavaScript SDK using Swagger Codegen (assuming you have the jar file locally)
COPY swagger-codegen-cli.jar .
RUN java -jar swagger-codegen-cli.jar generate -i system.swagger.json -l javascript -o ./sdk

