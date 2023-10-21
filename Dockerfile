# download java
FROM openjdk:11-jdk AS java-builder
WORKDIR /app

# Generate JavaScript SDK using Swagger Codegen (assuming you have the jar file locally)
COPY swagger-codegen-cli.jar .
COPY ./gen/openapiv2/. .

# For each file *.swagger.json, generate the SDK and rename the folder to the file name (without extension)
RUN for file in *.swagger.json; do \
    java -jar swagger-codegen-cli.jar generate -i $file -l javascript -o ./sdk/$(basename $file .swagger.json); \
    done