<template>
    <div>                
        <div v-for="message in messages" :key="message.id">
            <span class="text-info">[{{ message.name }}]: </span>
            <span>{{message.message}}</span>
            <span class="text-secondary time">{{message.timestamp}}</span>
        </div>
        <div class="container" style="margin-bottom: 30px">
            <form @submit.prevent="addMessage">
                <div class="form-group">
                    <input type="text" name="message" class="form-control" placeholder="Enter message ..." v-model="newMessage">
                    <p class="text-danger" v-if="errorText">{{ errorText }}</p>
                </div>
                <button class="btn btn-primary" type="submit" name="action">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
import { firestore } from '@/config/'

export default {
    data(){
        return{
            messages: [],
            newMessage: null,
            name: 'jay',
            errorText: null
        }
    },
    methods:{
        addMessage () {
            if (this.newMessage) {
                firestore.collection('messages').add({
                    message: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err);
                });
                this.newMessage = null;
                this.errorText = null;
            } else {
                this.errorText = "A message must be entered first!";
            }
        }
    },
    created() {
        let ref = firestore.collection('messages').orderBy('timestamp');
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type = 'added') {
                    let doc = change.doc;
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        message: doc.data().message,
                        timestamp: moment(doc.data().timestamp).format('LTS')
                    });
                }
            });
        });
    }
}
</script>
