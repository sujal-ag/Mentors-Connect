class ApiResponse {
  constructor(status, message = "success", data = null) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}
export default ApiResponse;