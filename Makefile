build:
	protoc --go_out=. --go-grpc_out=. *.proto

sdk:
	docker build -t js_sdk -f Dockerfile.js .
	docker run -d --name temp-container --entrypoint /bin/sh js_sdk -c "tail -f /dev/null"
	docker cp temp-container:/go/src/app/generated ./js/generated
	docker cp temp-container:/go/src/app/sdk ./js/sdk
	docker rm -f temp-container
	


