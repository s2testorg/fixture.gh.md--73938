async function main(payload, context) {

    console.log("Handler running :)");
    console.log("Payload:", payload);
    console.log("Context:", context);

    if ("error" in payload){
        throw("Expected Error");
    }

    if ("sleep" in payload){
        console.log("sleep");
        await new Promise(resolve => setTimeout(resolve, payload.sleep * 1000));
    }
}


exports.handler = async (event, context) => {

    console.log("AWS context:", context);
    await main(event, context.clientContext);

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from: AwsFixtureTest'),
        log: context.logStreamName,
    };
    return response;
};