class SendResponse {
  constructor() {
    this.status = null;
    this.message = null;
    this.error = null;
    this.data = null;
  }

  response({ status, message, error, data }) {
    this.status = status;
    this.message = message;
    this.error = error;
    this.data = data;
    return this;
  }
}
module.exports = SendResponse;
