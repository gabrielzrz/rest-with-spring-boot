package gabrielzrz.com.github.exception;

/**
 * @author Zorzi
 */
public class UserNameNotFoundException extends RuntimeException {
    public UserNameNotFoundException(String message) {
        super(message);
    }
}
