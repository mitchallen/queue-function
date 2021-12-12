
export function makeLogger(options = {}) {
    let {
        verbose = true,
        date = true,
        name = undefined,
    } = options;
    function log(message) {
        if (verbose) {
            let msg = '';
            msg += date ? `${new Date().toISOString()}: ` : "";
            msg += name ? `[${name}] ` : "";
            msg += message;
            console.log(msg);
        }
    }
    return {
        log
    }
}