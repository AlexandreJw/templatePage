import ButtonComponent from './src/main.vue';

export default (text) => {
    let fullBack = ButtonComponent.data()
    ButtonComponent.data = function () {
        return {text, fullBack}
    }
    return ButtonComponent
}
