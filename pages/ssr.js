import SSRScreen from "../src/screens/SSRScreen";

function delay(seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

export async function getServerSideProps() {

    await delay(2);

    return {
        props: {
            mensagem: "Fui renderizada para esta requisição!"
        }, // will be passed to the page component as props
    }
}

export default SSRScreen;