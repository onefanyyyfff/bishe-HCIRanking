<template>
<div id="nkr">
    <div class="lc">
        <div class="tag-area">
            <div v-for="(item,maxindex) in maxTags" :key="maxindex+'A'" class="max-pop">{{item.name}}</div>
            <div v-for="(item,medindex) in medTags" :key="medindex+'B'" class="med-pop">{{item.name}}</div>
            <div v-for="(item,minindex) in minTags" :key="minindex+'C'" class="min-pop">{{item.name}}</div>
        </div>
        <div class="clean-float"></div>
        <div class="key-word-blanket">
            
        </div>
    </div>
    <div class="rc">
        <div class="info" v-for="(item,index) in infos" :key="index">
            <div class="title">{{item.title}}</div>
            <div class="detail">
                <div>authors:</div>
                <div class="authors" v-for="(authoritem,authorindex) in item.author" :key="authorindex">{{authoritem}}</div>
                <div style="margin: 0 0 0 1vw;">conferences:</div>
                <div class="conf">{{item.conf}}</div>
            </div>

            <div class="school">
                <div>schools:</div>
                <div style="font-style: italic;text-decoration: underline;">{{item.sch}}</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            maxTags: [{
                'name':'cognitive modeling',
                'score': 6
            },{
                'name':'cognitive modeling',
                'score': 6
            },{
                'name':'cognitive modeling',
                'score': 6
            },{
                'name':'cognitive modeling',
                'score': 6
            }],
            minTags: [{
                'name':'Bayesian network',
                'score': 1
            },{
                'name':'Bayesian network',
                'score': 1
            },{
                'name':'Bayesian network',
                'score': 1
            },{
                'name':'Bayesian network',
                'score': 1
            }],
            medTags: [{
                'name':'intention',
                'score': 4
            },{
                'name':'intention',
                'score': 4
            },{
                'name':'intention',
                'score': 4
            }],
            infos: [{
                'title': 'Training Restricted Boltzmann Machines on World Observations',
                'author': ['Grorge E. Dahl','Ryan P. Adams','Hugo Larochelle'],
                'conf': 'ICML',
                'time':'2012',
                'sch': 'Carnegie Mellon University'
            },{
                'title': 'Training Restricted Boltzmann Machines on World Observations',
                'author': ['Grorge E. Dahl','Ryan P. Adams','Hugo Larochelle'],
                'conf': 'ICML',
                'time':'2012',
                'sch': 'Carnegie Mellon University'
            },{
                'title': 'Training Restricted Boltzmann Machines on World Observations',
                'author': ['Grorge E. Dahl','Ryan P. Adams','Hugo Larochelle'],
                'conf': 'ICML',
                'time':'2012',
                'sch': 'Carnegie Mellon University' 
            }]
        }
    },
    mounted() {

    },
    methods: {

    },
    created () {

    }
}
</script>

<style scoped>
#nkr {
    margin: 2vw 3vw;
    display: flex;
    justify-content: space-between;
}
.lc {
    width:48%;
    position: relative;
}
.rc {
    width:48%;
}
.tag-area :hover {
    cursor: pointer;
}
.max-pop {
    background-color:#CBA6C3;
    float: left;   
    border: 1px solid #ccc;
    margin: 0 1vw 1vw 0;
    padding: 0.5vw;
    font-size: 1.2vw;
}
.med-pop {
    background-color: rgba(210,161,196,0.5);
    float: left;
    border: 1px solid #ccc;
    margin: 0 1vw 1vw 0;
    padding: 0.5vw;
    font-size: 1.2vw;
}
.min-pop {
    background-color: rgba(210,161,196,0.1);
    float: left;
    border: 1px solid #ccc;
    margin: 0 1vw 1vw 0;
    padding: 0.5vw;
    font-size: 1.2vw;
}
.clean-float {
    clear: both;
}
.key-word-blanket {
    border: 1px solid #ccc;
    height: 18vw;
    position: relative;
    top: 12vw;
}
.info {
    height: 4vw;
    box-shadow: 0 0 8px #ccc;
    margin: 0.6vw 0;
    padding:0.3vw;
}
.title {
    font-size: 1.2vw;
}
.detail {
    display: flex;
    font-size: 0.8vw;
    color: #a1a1a1;
}
.school {
    display: flex;
    font-size: 0.8vw;
    color: #a1a1a1;
}
.authors {
    font-style: italic;
    text-decoration: underline;
}
.conf {
    font-style: italic;
    text-decoration: underline;
}
</style>