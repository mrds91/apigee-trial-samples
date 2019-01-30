var customers=JSON.parse(context.getVariable("apigee.customerList"));
var orders=JSON.parse(context.proxyResponse.content);
var customerOrder=JSON.parse((customers.value));
customerOrder.orders=JSON.parse((orders.value));
context.setVariable("_etag",crypto.base64(crypto.asBytes(context.getVariable("proxy.pathsuffix"))));
context.proxyResponse.content=JSON.stringify(customerOrder);
