build:
	protoc --go_out=. --go-grpc_out=. featureflag.proto 
	