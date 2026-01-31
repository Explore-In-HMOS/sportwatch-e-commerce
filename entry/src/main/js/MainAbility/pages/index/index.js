import router from '@ohos.router';

export default {
    data: {
        title: 'E-Shop'
    },
    onInit() {
        setTimeout(() => {
            router.replace({
                uri: 'pages/menu/menu'
            });
        }, 1500);
    }
};
