import {Who, getWho} from './who';

function helloworld(who: Who) : string {
    const hello = "Hello";
    return `${hello} ${who.name}`;
}

(function() {
    helloworld(getWho("yokotaso"));
})();
