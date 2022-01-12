// Driver file to run the main analysis with NodeProf.

import {main} from "../nodeprof";
import Analysis from "./analysis";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT


const main: main = (sandbox) => {
    // console.log("initializing...");
    //@ts-ignore
    console.error(`Creating analysis in Docker. Spec path => ${J$.initParams.specPath}`)
    sandbox.addAnalysis(new Analysis(sandbox));
    // console.log(sandbox);
};

main(J$);
