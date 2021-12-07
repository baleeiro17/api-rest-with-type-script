
import { resolve } from "path";
import { config } from "dotenv";

class configEnv {

    public connString: string ;
    public jwtSecret: string ;
    public jwtExpiration: number ;
    public portApp: string ;

    public constructor() {

        config({ path: resolve(__dirname, "../../.env") });
        this.portApp = process.env.PORT || "0" ;
        this.connString = process.env.DB_URL || "0";
        this.jwtSecret = process.env.WEBTOKEN_SECRET_KEY || "0" ;
        this.jwtExpiration = parseInt(process.env.WEBTOKEN_EXPIRATION_TIME || '0') ;

        // check variables
        this.checkVariables();
    }

    private checkVariables() {
        console.log("Checking the environment variables!!");
        if ( this.portApp == "0" ||  this.connString == "0" ||  this.jwtSecret == "0" ||  this.jwtExpiration == 0 ) {
            throw new Error("Config validation error:");
        }
    }
}

export default new configEnv();