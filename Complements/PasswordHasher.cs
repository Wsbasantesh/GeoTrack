using System.Security.Cryptography;
using System.Text;

public class PasswordHasher
{
    /// <summary>
    /// Genera un hash SHA-256 de la contraseña.
    /// </summary>
    /// <param name="password">La contraseña a hashear.</param>
    /// <returns>El hash en formato hexadecimal.</returns>
    public string HashPassword(string password)
    {
        if (string.IsNullOrEmpty(password))
            throw new ArgumentException("La contraseña no puede ser nula o vacía.");

        using (SHA256 sha256 = SHA256.Create())
        {
            byte[] bytes = Encoding.UTF8.GetBytes(password);
            byte[] hashBytes = sha256.ComputeHash(bytes);

            // Convertir el hash a formato hexadecimal.
            StringBuilder builder = new StringBuilder();
            foreach (byte b in hashBytes)
            {
                builder.Append(b.ToString("x2"));
            }

            return builder.ToString();
        }
    }

    /// <summary>
    /// Compara una contraseña con su hash.
    /// </summary>
    /// <param name="password">La contraseña en texto plano.</param>
    /// <param name="hashedPassword">El hash almacenado de la contraseña.</param>
    /// <returns>Verdadero si coinciden, falso de lo contrario.</returns>
    public bool VerifyPassword(string password, string hashedPassword)
    {
        string hashedInput = HashPassword(password);
        return hashedInput.Equals(hashedPassword, StringComparison.OrdinalIgnoreCase);
    }
}
