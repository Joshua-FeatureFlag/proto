
build:
	# https://github.com/grpc-ecosystem/grpc-gateway
	buf generate
	docker build -t js_sdk .
	docker run -d --name temp-container --entrypoint /bin/sh js_sdk -c "tail -f /dev/null"
	docker cp temp-container:/app/sdk ./sdk/js
	docker rm -f temp-container