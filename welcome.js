import chalkAnimation from "chalk-animation";
export { displayWelcomeMessage };
function displayWelcomeMessage() {
    return new Promise((resolve) => {
        let WelcomeMessage1 = chalkAnimation.karaoke("\n<<<===>>> WELCOME___TO___BANKING___SERVICE___SYSTEM <<<===>>>\n");
        setTimeout(() => {
            WelcomeMessage1.stop();
            resolve("");
        }, 4900);
    }).then(() => {
        return new Promise((resolve) => {
            let WelcomeMessage2 = chalkAnimation.radar('\n<<<--------->>> THIS____PROJECT____IS____STRUCTURED____BY_____TEHSEEN <<<--------->>>\n');
            setTimeout(() => {
                WelcomeMessage2.stop();
                resolve("");
            }, 6300);
        });
    }).then(() => {
        return new Promise((resolve) => {
            let message = chalkAnimation.radar("\n <<<------->>> LETS____GET____STARTED !! <<<------->>>\n");
            setTimeout(() => {
                message.stop();
                resolve("");
            }, 4000);
        });
    });
}
