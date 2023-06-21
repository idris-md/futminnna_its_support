import ErrorResponse from "./ErrorResponse";

export default interface AuthResponse extends ErrorResponse {
  isStudent: Boolean;
  passport?: string;
}
