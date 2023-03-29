<template lang="">
    <div>
       <h2> About</h2>
       <p>{{count}}</p>
       <button @click='incre'>증가</button>
       <div>getDB => {{resData}}</div>
       <button @click='add'>데이터에 DB에 추가</button>
       
    </div>
</template>

<script setup>
const aa = useState('g',()=>'about 내용쪽에 있는 데이터...');
const { data: resData } = await useFetch('/api/db');
</script>

<script>
export default {
    data() {
        return {
            count:100
        }
    },
    methods: {
        incre() {
            this.count++;
        },
        async add() {
            const data = {name:'홍홍홍', email:'aa@ddd.ddd',data:'2023-03-29'}
            await useFetch('/api/db?id=7',{body:data,method:'POST'})
        }
    }
}
</script>
<style lang="">
    
</style>