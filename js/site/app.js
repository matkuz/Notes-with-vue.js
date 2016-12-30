var vm = new Vue({
    el: '#vue-app',
    data: {
        n : localStorage.length,
        notes: [],
        display_notes_status : 0,
        note_is_edited: false,
        key_of_note_to_edit: 0,
        exist_notes: false,
        is_img_in_text: true,
        link_to_img: "",
        text_of_note: "",
        img_format: [
            "jpeg",
            "jpg",
            "gif",
            "png"
        ]
    },
    methods: {
        new_note: function(){
                //save note in localSorage
            localStorage.setItem(this.n , this.text_of_note);
                //adding to display notes
            this.notes.push(this.text_of_note);
            this.n = this.n + 1;
            this.text_of_note = "";
        },
        display_notes_btn: function(){
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
        delete_note: function( key ){
            if(this.n==1){
                //deleting for 1 element
                localStorage.removeItem(0);
                this.notes = [];
            }else{
                var k = (this.n) - 1;
                //taking value from next record (only values above key) and deleting last value
                for (var i = key; i < k; i++){
                    localStorage.setItem(i,localStorage.getItem(i+1));
                }
                var lsl = this.n - 1;
                localStorage.removeItem(lsl);
                this.n = this.n - 1;
                this.notes = [];
                //display in array
                for (var i = 0; i < this.n; i++){
                    this.notes.push(localStorage.getItem(i));
                } 
            }
        },
        edit_note: function( key_of_note ){
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
            //checking localStorage
            if(localStorage.length == 0){
                return false;
            }else{
                return true;
            }
        },
        link_to_img: function(){
            var http_link = this.text_of_note.indexOf("http:");
            var https_link = this.text_of_note.indexOf("https:");
            var lenght_link = 0;
            var value_link = "";
            if( http_link > -1){
                var before_link = this.text_of_note.substr(0 , http_link);
                value_link = this.text_of_note.replace(before_link, "");
                var space = value_link.indexOf(" ");
                if(space > -1){
                    for(var i = 0; i < this.img_format.length; i++){
                        if(value_link.indexOf(this.img_format[i]) > -1){
                            return value_link;
                        }
                    }
                }
            }
            if( https_link > -1){
                var before_link = this.text_of_note.substr(0 , https_link);
                value_link = this.text_of_note.replace(before_link, "");
                var space = value_link.indexOf(" ");
                if(space > -1){
                    for(var i = 0; i < this.img_format.length; i++){
                        if(value_link.indexOf(this.img_format[i]) > -1){
                            return value_link;
                        }
                    }
                }
            }
        }
    }
});















