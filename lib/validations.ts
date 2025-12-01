/** 
 * Validate email format with error message
 */

export function validateEmail(email: string): string | null {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Please enter a valid email address.";
    }
    return null;
  }
  
  /**
   * Validate password:
   * - At least 10 characters
   * - At least one uppercase
   * - At least one lowercase
   * - At least one number
   */

  export function validatePassword(password: string): string | null {
    if (password.length < 10) {
      return "Password must be at least 10 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    return null;
  }
  
  /**
   * Validate UK date of birth format (DD/MM/YYYY)
   * - Must be a valid calendar date
   * - Year between 1900 and current year
   */

  export function validateDOB(dob: string): string | null {
    const regex = /^([0-2]\d|3[01])\/(0\d|1[0-2])\/(19\d{2}|20\d{2})$/;
    if (!regex.test(dob)) {
      return "Date of birth must be in DD/MM/YYYY format.";
    }
  
    const [day, month, year] = dob.split("/").map(Number);
    const date = new Date(year, month - 1, day);
  
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return "Please enter a valid calendar date.";
    }
  
    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear) {
      return "Year must be between 1900 and the current year.";
    }
  
    return null;
  }
  