import SSGScreen from "../src/screens/SSGScreen";

function delay(seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

export async function getStaticProps() {

    await delay(2);

    return {
        props: {
            mensagem: "Fui gerada durante o build!"
        }, // will be passed to the page component as props
    }
}

export default SSGScreen;