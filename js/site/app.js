var vm = new Vue({
        el: '#vue-app',
        data: {
            n : localStorage.length,
            notes: [],
            display_notes_status : 0,
            note_is_edited: false,
            key_of_note_to_edit: 0,
            exist_notes: false
        },
        methods: {
            new_note: function(){
                localStorage.setItem(this.n , this.text_of_note);//save note in localSorage
                this.notes.push(this.text_of_note);//adding to display notes
                this.n = this.n + 1;
                this.text_of_note = "";
            },
            display_notes: function(){
                /* display notes after click btn ( only once possibility ) */
                if(this.display_notes_status == 0){
                    this.notes = [];
                    for (var i = 0; i < localStorage.length; i++){
                        this.notes.push(localStorage.getItem(i));
                    }
                    this.display_notes_status = 1;
                    $(".display-notes-btn").hide("slow");
                }else{
                    alert("Notatki są już wyświetlone lub nie dodałeś jeszcze ani jednej ;)");
                }
            },
            delete_note: function(key){
                localStorage.removeItem(key);
                this.notes = [];
                for (var i = 0; i < localStorage.length; i++){
                    this.notes.push(localStorage.getItem(i));
                }
                this.n = this.n - 1;
            },
            edit_note: function(key_of_note){
                this.note_is_edited = !this.note_is_edited;
                if(this.note_is_edited == true){
                    this.note_to_edit = this.notes[key_of_note];
                    this.key_of_note_to_edit = key_of_note;
                }
            },
            save_edit_note: function(){
                localStorage.setItem(this.key_of_note_to_edit , this.text_of_edit_note);
                this.notes = [];
                for (var i = 0; i < localStorage.length; i++){
                    this.notes.push(localStorage.getItem(i));
                }
                this.note_is_edited = !this.note_is_edited;
            }
        },
        computed: {
            exist_notes: function(){
                if(localStorage.length == 0){
                    return false;
                }else{
                    return true;
                }
            }
        }
    });