FROM golang:1.20

WORKDIR /backend

COPY go.mod go.sum ./

RUN go mod download
RUN go get github.com/gin-gonic/gin

COPY *.go . 

RUN CGO_ENABLED=0 GOOS=linux go build -o /restapi-proyecto1

EXPOSE 9000

CMD ["/restapi-proyecto1"]