import { ValueLabelRecord } from "./records/ValueLabelRecord.ts";
import { SysVar } from "./SysVar.ts";

/**
 * Metadata for sav file. Includes variable names, labels, valuelabels, encoding, etc.
 */
export class SavMeta{

    constructor(){
        this.header = null;
        this.sysvars = [];
        this.valueLabels = [];
    }

    header: any;
    sysvars: SysVar[];
    valueLabels: ValueLabelRecord[];
    firstRecordPosition: number;

    getValueLabels(varname){
        var vl = this.valueLabels.find(vl => vl.appliesToNames.includes(varname));
        return ( vl != null ) ? vl.entries : null;
    }

}
