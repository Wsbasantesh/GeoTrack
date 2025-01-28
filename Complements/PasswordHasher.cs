using System.Security.Cryptography;
using System.Text;

public class PasswordHasher
{
    /// <summary>
    /// Generate a hash SHA-256 from the password.
    /// </summary>
    /// <param name="password">Password to Hash.</param>
    /// <returns>hexadecimal format Hash.</returns>
    public string HashPassword(string password)
    {
        if (string.IsNullOrEmpty(password))
            throw new ArgumentException("La contraseña no puede ser nula o vacía.");

        using (SHA256 sha256 = SHA256.Create())
        {
            byte[] bytes = Encoding.UTF8.GetBytes(password);
            byte[] hashBytes = sha256.ComputeHash(bytes);

            // Change hash to hexadecimal.
            StringBuilder builder = new StringBuilder();
            foreach (byte b in hashBytes)
            {
                builder.Append(b.ToString("x2"));
            }

            return builder.ToString();
        }
    }

    /// <summary>
    /// Compare the password with the hash.
    /// </summary>
    /// <param name="password">Password in plain text.</param>
    /// <param name="hashedPassword">Hash saved on the password.</param>
    /// <returns>true if match, false otherwhise.</returns>
    public bool VerifyPassword(string password, string hashedPassword)
    {
        string hashedInput = HashPassword(password);
        return hashedInput.Equals(hashedPassword, StringComparison.OrdinalIgnoreCase);
    }
}
