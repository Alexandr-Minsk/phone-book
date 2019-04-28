<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">

                        </slot>
                    </div>

                    <div class="modal-body">
                        <form action="">
                            <div class="form-group row">
                                <label for="number">Phone number</label>
                                <input class="form-control" id="number" type="text" name="number" v-model="number" />
                            </div>
                            <div class="form-group row">
                                <label for="name">FIO</label>
                                <input class="form-control" id="name" type="text" name="name" v-model="name" />
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="btn btn-default" @click="$emit('close')">
                                Cancel
                            </button>
                            <button class="btn btn-danger" @click="doSave">
                                Save
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'EditPhone',
        props: {
            data: Object
        },
        data() {
            return {
                number: null,
                name: null
            }
        },
        methods: {
            doSave () {
                let newData = { number: this.number, name: this.name };
                if (Number.isInteger(this.data.idx)) {
                    newData.idx = this.data.idx;
                }
                this.$emit('save', newData);
            }
        },
        mounted: function() {
            this.number = this.data.number;
            this.name = this.data.name;
        }
    }
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 600px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
