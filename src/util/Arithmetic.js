export default {
    unixFormat(mmVal){
        const unitStr = ["mm", "cm", "m", "km"]
        const unitVal = [10, 100, 1000]
        let buff = mmVal;
        let i = 0;
        for (; i < unitVal.length; i++) {
            if(buff>unitVal[i]){
                buff = buff / unitVal[i]
            }else{
                break
            }
        }
        return [buff.toFixed(2), unitStr[i]]
    },
    /**
     * 计算胶带长度
     * @param outerDiameter 外圈直径
     * @param innerDiameter 内圈直径
     * @param singleLayerThickness 单层厚度
     * @param storey 层数
     */
    sumLength(outerDiameter, innerDiameter, singleLayerThickness, storey){
        let buff = 0;
        for (let i = 0; i < storey; i++) {
            let LayerLength = (innerDiameter + singleLayerThickness*i) * 3.1415926;
            buff += LayerLength
            //console.log("i="+i, buff, "d="  + (innerDiameter + singleLayerThickness*i) , "pi*d=",(innerDiameter + singleLayerThickness*i) * 3.1415926)
            console.log("第"+(i+1)+"层", "总长度", buff, "(mm) 本层长度", LayerLength, "(mm) 本层直径", (innerDiameter + singleLayerThickness*i), "(mm)")
        }
        return this.unixFormat(buff)
    },
    checkType(data){
        if(!data){
            return null;
        }
        let result = null;
        switch (typeof data) {
            case "number":
            case "bigint":
                return data
            case "string":
                try {
                    result = parseFloat(data)
                } catch (e) {}
                return result
            default:
                return result
        }
    }
}