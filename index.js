var vcf = require('bionode-vcf');
vcf.read("./data/ALL.chr22.phase3_shapeit2_mvncall_integrated_v5a.20130502.genotypes.vcf");
//rs587755077
// rs587654921
//rs587697622
let data_trat;
let zerozero=0;
let zero1=0;
let um1=0;


vcf.on('data', function(feature){

    if(feature.id==="rs4821480"){
        data_trat=feature;
        for(let i=0; i<data_trat.sampleinfo.length;i++){
            if(data_trat.sampleinfo[i].GT=='0|0'){
                zerozero++;
            }else if(data_trat.sampleinfo[i].GT=='0|1'||data_trat.sampleinfo[i].GT=='1|0'){
                zero1++;
            }else{
                um1+=2;
            }
        }
        let total=um1+zero1+zerozero;
        console.log("zerozero: "+zerozero+"\n zero1: "+zero1+"\n um1: "+um1+"\n total:"+total);
        return;
    }
})

vcf.on('end', function(){
    console.log('end of file')
})

vcf.on('error', function(err){
    console.error('it\'s not a vcf', err)
})