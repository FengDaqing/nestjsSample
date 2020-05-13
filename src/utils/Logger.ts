
 
export default class Logger {
 

    static Warn(message) {
        try {
            console.log(message); 
        }
        catch (err) {
            console.log(this.Warn_Error_Message); 
        }
    }

    static Info(message) {
        try { 
            console.log(message); 
        }
        catch (err) { 
            console.log(this.Info_Error_Message); 
        }
    }
    private static Warn_Error_Message = "Trace Warning message is failure";
    private static Info_Error_Message = "Trace Error message is failure";
}