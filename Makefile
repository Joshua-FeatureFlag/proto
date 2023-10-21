
build:
	rm -rf ./gen
	rm -rf ./sdk
	mkdir -p ./gen
	mkdir -p ./sdk/js
	
	docker build -t js_sdk .
	docker run -d --name temp-container --entrypoint /bin/sh js_sdk -c "tail -f /dev/null"
	docker cp temp-container:/app/gen ./gen
	docker cp temp-container:/app/sdk ./sdk/js
	docker rm -f temp-container