import Link from 'next/link'

export default () => (
    <div>
        <button className='myButton'>
            Get Better
            <br />
            <span className='now'>Now!</span>
        </button>
        <style jsx>{`
            .now {
                font-style: italic;
            }
            .myButton {
                -moz-box-shadow:inset 0px 0px 15px 3px #23395e;
                -webkit-box-shadow:inset 0px 0px 15px 3px #23395e;
                box-shadow:inset 0px 0px 15px 3px #23395e;
                background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #2e466e), color-stop(1, #415989));
                background:-moz-linear-gradient(top, #2e466e 5%, #415989 100%);
                background:-webkit-linear-gradient(top, #2e466e 5%, #415989 100%);
                background:-o-linear-gradient(top, #2e466e 5%, #415989 100%);
                background:-ms-linear-gradient(top, #2e466e 5%, #415989 100%);
                background:linear-gradient(to bottom, #2e466e 5%, #415989 100%);
                filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#2e466e', endColorstr='#415989',GradientType=0);
                background-color:#2e466e;
                -moz-border-radius:17px;
                -webkit-border-radius:17px;
                border-radius:17px;
                border:1px solid #1f2f47;
                display:inline-block;
                cursor:pointer;
                color:#ffffff;
                font-family:Arial;
                font-size:15px;
                padding:6px 13px;
                text-decoration:none;
                text-shadow:0px 1px 0px #263666;
            }
            .myButton:hover {
                background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #415989), color-stop(1, #2e466e));
                background:-moz-linear-gradient(top, #415989 5%, #2e466e 100%);
                background:-webkit-linear-gradient(top, #415989 5%, #2e466e 100%);
                background:-o-linear-gradient(top, #415989 5%, #2e466e 100%);
                background:-ms-linear-gradient(top, #415989 5%, #2e466e 100%);
                background:linear-gradient(to bottom, #415989 5%, #2e466e 100%);
                filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#415989', endColorstr='#2e466e',GradientType=0);
                background-color:#415989;
            }
            .myButton:active {
                position:relative;
                top:1px;
            }
        `}</style>
    </div>
)