Server sent events work in a way that server can send the data to the client without client sending the requests, but client first needs to establish a connection.

Criteria:
Its simple, server needs to set a header

Content-Type: text/event-stream

to send events server will do write() instead of send()/json(), each write will be an event to the client

For client:
Clients can establish the connection via
new EventSource(url)

and thats it.

P.S they are lighter than websockets.
