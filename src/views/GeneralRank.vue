<template>
<div id="gr">
    <div class="lc">
        <div class="lt">
            <span>HCIRanking is a metrics-based ranking of top human computer interaction institutions around world. Choose institutions and the range of year, the results will show below. Choose the institution on the left, the detail will show on the right.</span>
        </div>
        <div class="select-contain">
            <div class="rank-sele">
                <span>Conference Rank</span>
                <span v-for="(item,index) in confRank" :key="index"><input type="checkbox">{{item}}</span>
            </div>
            <div class="conf-sele">
                <span>Conferences</span>
                <span v-for="(item,index) in confs" :key="index"><input type="checkbox">{{item}}</span>
            </div>
            <div class="time-sele">
                <span>Time</span>
                <select>
                    <option v-for="(item,index) in startTime" :key="index">{{item}}</option>
                </select>
                <span>to</span>
                <select>
                    <option v-for="(item,index) in endTime" :key="index">{{item}}</option>
                </select>
            </div>
        </div>
        <div class="school">
            <div class="sch-item" 
                v-for="(item,schindex) in schools" 
                :key="schindex"
                :class="{backColo : schindex%2 == 0}"
                @click="changeSch(schindex)">
                <div class="rank-num">{{schindex+1}}</div>
                <div class="sch-name">{{item.name}}</div>
                <div class="sch-score">{{item.score}}</div>
                <div class="teacher"
                    v-for="(item,teaindex) in teachers"
                    :key="teaindex"
                    v-show="schFlag == schindex">
                    <div class="tea-name" @click="changeTea(teaindex)">{{item.name}}</div>
                    <div class="tea-score">{{item.score}}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="rc">
        <img src="../../static/1.png" v-if="schFlag != -1">
        <div v-if="teaFlag != -1">
            <div class="conf-rank">A+</div>
            <div class="A" v-for="(item,index) in ApGroup" :key="index">
                <div class="title">
                    <span>{{item.title}}</span>
                </div>
                <div class="detail">
                    <div class="authors" v-for="(item,authorindex) in item.author" :key="authorindex">{{item}}</div>
                    <div class="conf">{{item.conf}}</div>
                    <div class="time">{{item.time}}</div>
                </div>
            </div>
            <div class="conf-rank">A</div>
            <div class="A" v-for="(item,index) in ApGroup" :key="index">
                <div class="title">{{item.title}}</div>
                <div class="detail">
                    <div class="authors" v-for="(item,authorindex) in item.author" :key="authorindex">{{item}}</div>
                    <div class="conf">{{item.conf}}</div>
                    <div class="time">{{item.time}}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            confRank:['A+','A','B+','B','C+','C'],
            confs:['CHI','CSCW','UIST','HCII'],
            startTime:['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            endTime:['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            schools:[{
                    'name':'Carnegie Mellon University',
                    'score':'96.7'
                },{
                    'name':'Carnegie Mellon University',
                    'score':'96.7'
                },{
                    'name':'Carnegie Mellon University',
                    'score':'96.7'
                },{
                    'name':'Carnegie Mellon University',
                    'score':'96.7'
                },{
                    'name':'Carnegie Mellon University',
                    'score':'96.7'
                },{
                    'name':'Carnegie Mellon University',
                    'score':'96.7'
                },{
                    'name':'Carnegie Mellon University',
                    'score':'96.7'
                },{
                    'name':'Carnegie Mellon University',
                    'score':'96.7'
                },{
                    'name':'Carnegie Mellon University',
                    'score':'96.7'
                },{
                    'name':'Carnegie Mellon University',
                    'score':'96.7'
                },{
                    'name':'Carnegie Mellon University',
                    'score':'96.7'
                },{
                    'name':'Carnegie Mellon University',
                    'score':'96.7'
                }],
            teachers: [{
                    'name':'Scott E. Hudson',
                    'score':'39'
                },{
                    'name':'Scott E. Hudson',
                    'score':'39'
                },{
                    'name':'Scott E. Hudson',
                    'score':'39'
                },{
                    'name':'Scott E. Hudson',
                    'score':'39'
                },{
                    'name':'Scott E. Hudson',
                    'score':'39'
                },{
                    'name':'Scott E. Hudson',
                    'score':'39'
                },{
                    'name':'Scott E. Hudson',
                    'score':'39'
                }],
            schFlag: -1,
            teaFlag: -1,
            ApGroup: [
                {
                    'title': 'Training Restricted Boltzmann Machines on World Observations',
                    'author': ['Grorge E. Dahl','Ryan P. Adams','Hugo Larochelle'],
                    'conf': 'ICML',
                    'time':'2012',
                    'score':'3.2'
                },
                {
                    'title': 'Training Restricted Boltzmann Machines on World Observations',
                    'author': ['Grorge E. Dahl','Ryan P. Adams','Hugo Larochelle'],
                    'conf': 'ICML',
                    'time':'2012',
                    'score':'3.2'
                },
                {
                    'title': 'Training Restricted Boltzmann Machines on World Observations',
                    'author': ['Grorge E. Dahl','Ryan P. Adams','Hugo Larochelle'],
                    'conf': 'ICML',
                    'time':'2012',
                    'score':'3.2'
                },{
                    'title': 'Training Restricted Boltzmann Machines on World Observations',
                    'author': ['Grorge E. Dahl','Ryan P. Adams','Hugo Larochelle'],
                    'conf': 'ICML',
                    'time':'2012',
                    'score':'3.2'
                },{
                    'title': 'Training Restricted Boltzmann Machines on World Observations',
                    'author': ['Grorge E. Dahl','Ryan P. Adams','Hugo Larochelle'],
                    'conf': 'ICML',
                    'time':'2012',
                    'score':'3.2'
                }
            ]
        }
    },
    mounted() {

    },
    methods: {
        changeTea(index) {
            this.$nextTick(() => {
                this.schFlag = -1;
                this.teaFlag = index;
            })          
        },
        changeSch(index) {
            this.$nextTick(() => {
                this.schFlag = index;
                // this.teaFlag = -1;
            })    
        }
    },
    created () {

    }
}
</script>

<style scoped>
#gr {
    margin: 2vw 3vw;
    display: flex;
    justify-content: space-between;
}
.lc {
    width:48%;
}
.rc {
    width:48%;
}
.lt {
    background-color: #CBA6C3;
    padding: 1vw;
    font-size: 1.1vw;
    color:#353866;
} 
.select-contain {
    display: flex;
    flex-direction: column;
    margin: 0.5vw 0 0 0;
}
.rank-sele {
    border-bottom: 1px solid #ccc;
    padding: 0.5vw 0;
}
.rank-sele span {
    margin: 0 1vw 0 0;
}
.conf-sele {
    border-bottom: 1px solid #ccc;
    padding: 0.5vw 0;
}
.conf-sele span {
    margin: 0 1vw 0 0;
}
.time-sele {
    border-bottom: 1px solid #ccc;
    padding: 0.5vw 0; 
}
.sch-item {
    display: flex;
    flex-wrap: wrap;
    padding: 1vw;
}
.sch-item :hover {
    cursor: pointer;
}
.backColo{
    background-color: rgba(210,161,196,0.1);
}
.rank-num {
    width:5%;
}
.sch-name {
    width: 90%;
}
.sch-score {
    width: 5%;
}
.teacher {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #fff;
}
.tea-name {
    width:90%;
    margin: 0 0 0 5%;
}
.tea-score {
    width: 5%;
}
.conf-rank {
    background-color: rgba(210,161,196,0.1);
    font-size: 2vw;
    color:#353866;
}
.A {
    height: 3vw;
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
.conf {
    margin: 0 0 0 0.8vw;
}
.time {
    margin: 0 0 0 0.8vw;
}
</style>