import Teacher from '../components/Teacher';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';


const Teachers = () => {

    const [teacher, setTeacher] = useState(
        [{
            "id": 1,
            "fname": "Dalia",
            "lname": "Lilith",
            "email": "lpeet0@opera.com",
            "language": "Kurdish",
            "description": "Displaced spiral fracture of shaft of right femur, subsequent encounter for open fracture type I or II with routine healing",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABjSURBVCjPY/zPgB8wMVCqgAVElP//x/AHDH+D4S8w/sWwl5GBgfE/MSZAQNL/31CdMHiGaBNS/yPbjIC3SHSD+3+EXoh5z4k2wfs/qt2/ofAziW7Q+v8brhsSrn+IMYFgZAEAE0hMH/VkcbsAAAAASUVORK5CYII=",
            "price": 5536,
            "rating": 3.1
          }, {
            "id": 2,
            "fname": "Fancie",
            "lname": "Darell",
            "email": "dmunehay1@nyu.edu",
            "language": "Maltese",
            "description": "Melanocytic nevi",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGSSURBVDjLlZO7S8NQGMVb/weRgoI4iIuCVuoiuBfBwUFwaosPqJODk5OLBVutSlMsuDg4OVWkYO3o4Cha/BNS+qLP9K3HnEtT07f94HATcs8v33eSawBgUGtSlVmVZYimVY3Ro8nQBJgrlUq2Xq9/NxoN9JL6HD6f76oTogEsNBeLRSiK0lIul0Mmk0E8HheQWCwGSZLaICwjAdxQLpdRrVbFShUKBWSzWSQSCQEolUrgSwKBgIB0AWjWRAAN+XweyWSya6RmJsY2gDpGawOvObc2SiqVEp3Istwf0Ck9hJ0wj3Q6/X+AHsJxmAlBIwGoWq0mciGEGhnALkJvDzgK2LB3sQH7mRWrjtmbgQCaNAVf73HyYMdTVMK7HIb3xYkt7zxWDkyeoQC273BbEfy8RPDrGixPZBfeyD4B5aFfgVo/XkQoegt9PX5IBEAP+OmXwdrhDNxhB1xhmzC7nm1/HTR/x2U1ZUXd3PMw+YOn2PTM4Ty8I97MlfcigyZgipBBR3lhe/zO4jQpbJvrkn3CT+8vh7avwsYhJlIAAAAASUVORK5CYII=",
            "price": 6039,
            "rating": 3.0
          }, {
            "id": 3,
            "fname": "Emelyne",
            "lname": "Meir",
            "email": "mmarcos2@clickbank.net",
            "language": "Zulu",
            "description": "Laceration of unspecified blood vessel at shoulder and upper arm level, left arm, subsequent encounter",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAL2SURBVDjLVdNNaBx1GMfx78zO7Lu765qQWIPteqiH+IKCjTmkClIVPHi0pVDSXBT0sGhLUOvJl0OL4AuVBC+CLXpoD1KqweBBWFFajOChSTU20q2h6e66nX2Znfm/ejCJ8Qff6+fy8DjWWgCmz9f3AR/cV0pPhtIQSoM0hoEyAdAFmoAG2kAL+Bz41mNzRqmJh0fzk689MczO9YUphsIU25EeExK6sebPZo9v/ugfAKo7gZFC0gGgflvjOw6eAwkPUr7LvSmXhOviJ+CRsQy7irnyp5fW33e3AC1loWQilIGucAgkdDoRQQRBBK0B3OppAF4/e53JSo4HhvzhbSAfBiP7v5pHHZ2mH2kqJ2cZ+uxjwqBPNzb0IstAgAEc3eGna22WrgfrLoA4Ol2eXfrimZw3QDoeYWyRePh0GZ0/RdTu0o8NfWnAwkYn5sPF1Y4WYtoVR44cNGH01+iwXzT1FvVj76CApUNVxI2ApNNn77EZUrXviZSDsaB9jRKicv7lxxZdM4jm433jabO0Asdn6eTLOC7oQpnfX3gFfrmKnBjnnrmTuFJiLag4RotYA7gmHLyY+LoWmcounBNvYm81cLEkgyaVuXdRe+7GuVijPlPFSfpIren1Q6WE6AC42YsXvjy9e//EtdXbyHyKyqszYOH+946TKHiEbcOVuXMEUwfI+NDqxahYbCy89awFcAEWhvaKj6YO48WQaDTAcXGbDcIA1k6cQuaKYCHruTTaA7SI17eu501Vzw4Bbz84OU6veobvlgW5rubHTy6Q9i2+B8nEvxWysFoPUUJsbANaiKeA535eXqM98OjFFqktsXQQyqC0wVhLuVjkpadHudkK0UI0/gOkfPT5Jx/KvHH48f/9gLYgtUUowMLphXWyPnR7IVrK1k5g7WYz4MziMqV8hlIhTSmXophLcUc2SSrpkvJcDk2NkPKg8XcXLeWNbcAoda52eWWsdnllN3DXZnduVkwnfT+d9inkMpQKWX69Wv8N+GEL+AdfSH+n2ppttwAAAABJRU5ErkJggg==",
            "price": 3424,
            "rating": 4.9
          }, {
            "id": 4,
            "fname": "Foster",
            "lname": "Karola",
            "email": "kateridge3@wordpress.com",
            "language": "Tsonga",
            "description": "Galeazzi's fracture of right radius, subsequent encounter for closed fracture with routine healing",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADnSURBVCjPtZG9SgNREIW/604wMaig2CRgEUsfIrLb+B62vkEgr2UQsklhk2cQRNDCSsHC6N6ZOxa5rKm0cgZOc36Kc4Lz+wnAam6lYmj+uMH6qoLgrMa95Yim9WwyOyx4qq5rAZ0e8cIu4Jl0njngjIcJdbgb7y1PeaehoUFxAgUd9ukz57GSOD0hUtCli7cpTuKTc+4noqx55QsnYSScRMJwhEMU0bLgjY9MbAv6DImlRJTbLGALnSEjFFGMC9at30hAwumRUCRyjOF49pEzHGeAInF2cxl/2mvbNBTDZuGvLXb4d8E3CxSGOVhPWycAAAAASUVORK5CYII=",
            "price": 5946,
            "rating": 4.9
          }, {
            "id": 5,
            "fname": "Miner",
            "lname": "Grier",
            "email": "gbragger4@mysql.com",
            "language": "Maltese",
            "description": "Other superficial bite of left knee",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAENSURBVDjLpZM/SwNREMTnxBRpFYmctaKCfwrBSCrRLuL3iEW6+EEUG8XvIVjYWNgJdhFjIXamv3s7u/ssrtO7hFy2fcOPmd03SYwR88xi1cPgpRdjjDB1mBquju+TMt1CFcDd0V7q4GilAwpnd2A0qCvcHRSdHUBqAYgOyaUGIBQAc4fkNSJIIGgGj4ZQx4EEAY3waPUiSC5FhLoOQkbQCJvioPQfnN2ctpuNJugKNUWYsMR/gO71yYPk8tRaboGmoCvS1RQ7/c1sq7f+OBUQcjkPGb9+xmOoF6ckCQb9pmj3rz6pKtPB5e5rmq7tmxk+hqO34e1or0yXTGrj9sXGs1Ib73efh1WaZN46/wI8JLfHaN24FwAAAABJRU5ErkJggg==",
            "price": 6636,
            "rating": 3.3
          }, {
            "id": 6,
            "fname": "Jilli",
            "lname": "Mile",
            "email": "mpietruszka5@cdc.gov",
            "language": "Khmer",
            "description": "Congenital hydronephrosis",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADpSURBVCjPY/jPgB8y0EmBHXdWaeu7ef9rHuaY50jU3J33v/VdVqkdN1SBEZtP18T/L/7f/X/wf+O96kM3f9z9f+T/xP8+XUZsYAWGfsUfrr6L2Ob9J/X/pP+V/1P/e/+J2LbiYfEHQz+ICV1N3yen+3PZf977/9z/Q//X/rf/7M81Ob3pu1EXWIFuZvr7aSVBOx1/uf0PBEK3/46/gnZOK0l/r5sJVqCp6Xu99/2qt+v+T/9f+L8CSK77v+pt73vf65qaYAVqzPYGXvdTvmR/z/4ZHhfunP0p+3vKF6/79gZqzPQLSYoUAABKPQ+kpVV/igAAAABJRU5ErkJggg==",
            "price": 2515,
            "rating": 3.3
          }, {
            "id": 7,
            "fname": "Layne",
            "lname": "Gracie",
            "email": "gbriar6@infoseek.co.jp",
            "language": "Dzongkha",
            "description": "Strain of muscle and tendon of long extensor muscle of toe at ankle and foot level, left foot, subsequent encounter",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAInSURBVDjLhZPda9NQHIbzVwlWryzthpWuIpWOieKYZXO2q1vC0KFr9aZM3Yr40QunspU2TVYmYhVRvNErwQtR3E0JTq3G2o80mc0Ql9dzTr/SYdnFA8k5yft78nLCjcxJNwKzsuoOiZoj2GKsi3NS1I7y4hIA7n9wgQvyz4KiWLphwNgyoRMq+jZ+MUyo1ToOR6Ra3wA6ua4b8F/2gL830WF8YRGB2VX4hBwOBEWrnxl3kGzQyXzyLJbfLuL+uwQevr+Jk7EsiBn2MmMBdbJ58UEEKx9vYfVDE89MBtTsTVjA53iiy/XbeD4XRaluwhWSNRZQIYmeay6cSsYxfCmFwfMpEGW4wjk4gxm4J7IECd6IhOW7z/AlkYRaawXQbyuTtCOJAQzPp/bU9gtrLOBHrUECJI3bP5bWypoJx7l9cE+tMO0TsTuIpl90uCq+xJnoEtP2hUV8Cp7G90orwMECGthQd5gynRxLPUWuoOOR8huPN//gyde/iMuvmLZvKgtlfBTFdsBgSNwslavQiOIACaCF0ofzRQv5bzsd6BrV9obSyI8EUCw34JwkAcd4aWFoWn5N00ihFi30+HwaM5LCmM4UGH5SLtX28uvMtlg2mwH2U9UuNHBlDUKu2ANdo9pDwjqqpNQSOwdyrSegXeih0Rh7wQ5da2lbdDI5RBqxT/Qa2ArdUK1ddLV7/gX7jb1QzdhGjVAl10262n0D7IXSSbtpa9vf+QeB6/JTIb6VuwAAAABJRU5ErkJggg==",
            "price": 4130,
            "rating": 4.1
          }, {
            "id": 8,
            "fname": "Bernie",
            "lname": "Elicia",
            "email": "eantley7@reddit.com",
            "language": "Latvian",
            "description": "Other Hodgkin lymphoma, intrapelvic lymph nodes",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJmSURBVDjLfZPLb8xRFMc/9/ebqVHvEkaiqTJCEIkNmy4shKY2FhIkliwk4ploV00jQhNLQSz9BSxY6CBNtBWbBgsh3lrVd3U6j/v73cexmGk7Kpzkm3Nucs/nfM9NrhIRANzZM8L2ndhsFrEWcQ5vDL6Sk83NyJNuljx9rKiKxGxR3SRVjd7a8tlaJDYsjHmAsYi1+CjCW1sGWTtXJ/4BCOYAsUGiCBoacFGEjyJcFOG0RmUy+GIJieP/OIjNFfKv25OHfpI8Og41Ed4LrhjgJ77huyfLd/4FSJx7MSg6yLPp/FJqtyIEBL6EMtP43Dvi1M28P6QHFwKUiGD7NuxFeEDmVlrC5Xg7CXYGcQXEaVAKnCHf3zbsYg6nT8jLP95AnGmj/nJaEisR+wtcCXG6ogI+GkV8gdSW02mTo+2vFbyNm8IluxCbQ7yuKKpII76IN1MEtWsxBZr+BnhXFwQJxJfARxXpeTnNaO97RvseUvyRWPMxm/gO3D7QZTvLAOdBLPh43vrsdKcZ7ftA8bNh97FLLGrcQelNV/3b59mr2f3JQlBewU2KmUbELLBe1sCzfjL7jpD61I26d5zaz/fZ2LA6FCUXyg6M7nETLw8HK7Yh1fZdOduJIql0I7RcnN+9Yz2hVxsDAKfpzPdfH/Z6AsIUIhZxFSd4wlWLKb56BB3riVoVU62K3MgYLpQhNfsbf95Vp5zhyrI9J9PJus2gBLEFXDzNwKNeCp9mqF/tSASDzIxZvo6EzmhpnwMAfLmh9sbTtFlNk7PUmQh0kUldoKcmXDdUmhpvCZ1qcKH8ELhzsMte+w2tS8iXJ5jooAAAAABJRU5ErkJggg==",
            "price": 6002,
            "rating": 3.0
          }, {
            "id": 9,
            "fname": "Binny",
            "lname": "Kriste",
            "email": "kmottram8@google.co.jp",
            "language": "Malay",
            "description": "Exposure to other furniture fire due to burning cigarette, initial encounter",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGtSURBVDjLpZO/a5NhFIWfL1bNoFQdREMRRAo62CqIhOImWRz8A9xcNU4uFd1asEs3cXDxX+ggFkTQoZRsUrGDCDpoY4VSEoPRku+e4/B9+UUyFHqnM9zzcM77chPbHGQKHHAmumL51c9eFNkYiAAMlpAhlOkQLNw5lwwBAEonj2CMBQYsI4MHIBJ8/dUeTRA2dm4Q2MbO0+QgyUgmOmMqRGQRsZFyY1drGNIJjQIcyhYNkrDIDeoZu8A0HQNIBQqjfClb7mr1kxiUehSgVITc6+mBzs4rdZOk4wBpChHq9R+GQLP1luaf9/zda9Bq73HrUf3J66cbi31ABBET+avnRmdfudNYpThZo3LtOlOnpnm3uULt09ZCuVo6UegnMBFGKUQ4+5UQaZitnRWuXJwlCsHs2QqRdChfngO43weECZlUzrWIyJLstrY5nBzj9qUHADy8+YILp2cAigNvID5/b/c6S8JhBOz+brBZX2ejvsZ85SVLb+5SPHQU4F+yn2ssV0uLU+cnH8/N3GD6zFW+bH9g/eMaP741l5P9nnO5WloC7gHHgRbwvPasPv8fJZl0Xd9fi4EAAAAASUVORK5CYII=",
            "price": 6097,
            "rating": 4.2
          }, {
            "id": 10,
            "fname": "Gun",
            "lname": "Gael",
            "email": "gtschursch9@accuweather.com",
            "language": "Khmer",
            "description": "Corrosion of third degree of right axilla, initial encounter",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJcSURBVDjLbZPfa85xFMdf36/nebbGBcLaMmtM2DybElsjQm5c+PEnoKSQCzfEnZtduLRdSJFc4UK5sEizSLtQNCYXJMXKlMeG7fv5cc5x8X02w06dzqdPn/M673M6n8TM2H/6WruZ3TaoYPQYhhlgRh5s1lUCwU18GLpxfjVAgfzBMYP15bZVyfjXCcxmkiCHKabwfeIX085QK7RQtRwAO8ptTcmujiZWNZSxnICa5lU1r758cR11tQW2HTjOXwDMlpTbm7n//B2VyhSmCoDOqDDD1Pg+OUXmPHOt2gJJoVRg7cZmWuuXIgJmiqohYogqUY3pLHDrzuP5AIaI8nF8klJaJMsygvNEze8jCygUSyxbWIOazQMAVJQoAecch7a25vJzdZgZ1wffEmqL/JP/R0EQRUIkSsrNx29wIRLFkKhEEoqlEj7mQ50XEKPiQ8ArWFpDUixCamiiqCpeErz8D0irQyREIWYRF4QsClkQXIi4KDgvuKlnfP50iZZ1A5R3j7PvXOeFvxWIElzABcnbEcOLEkWR6ac01r9h84YuVi5dy+DoXYZfP7nYfbJxcTq3heBzgI/KdBB8EFxUpn48YtP6TiQVOhv2Ikmgu9wDcCKdWRgfhegiLihZEELQXL4TKj+/UEwWsX/DKQDO7LnCmhUdALWzMxAxxAsu5J6FiHOK98q3yQqjY8/ofXgYgN4Hh3k/PgKQzc6ANGVLVweWJIgYUQytxsQdZHhkgJ6O7dx71U8pKfD05RBAX2Jm7DzSd9WMo/nPm7P/GFTP1A5BzQtIPMAPoH/48tjZ3wRCz4QMKdc8AAAAAElFTkSuQmCC",
            "price": 6828,
            "rating": 4.3
          }, {
            "id": 11,
            "fname": "Liam",
            "lname": "Basilius",
            "email": "bparsalla@buzzfeed.com",
            "language": "Chinese",
            "description": "Other antepartum hemorrhage, second trimester",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ8SURBVDjLpVLfS1NhGPYP8D6im8DKwrYhUaa1tEyyIXlRWtFFJlZQERIGUZKGI5dO7ZeUEl1YaKUYkyU1J0hE/ppzuOnUDbdpbp7Nue2crZ2J9fSeQ4LhdtUHLx/fx/c87/M+z5cEIOl/6p/DsjGnzWfIhnf0CJjhw2AGD2HpWxY8Xw/CPXAAi/378aNvHxY+p7viEhD416q/FTFfC2JLL8AvPkd0/gl+OhoRsdXDN1gsgLm4CghcE5opw6qvFeHpfHDm4wgZsxEcykLEroZ/tFQAryUcwTsij8WYZ4i6boGz5IE1HkWQxojY6xAwlZN0OVyfZClxCbzD8jMBywXEvC0IT50AazqG4Kgc3ORNcNYqeAYUcGllioQmklnhiKsavLsR3EQuQmPZCAxmitK9388RWFqRMAUCZyyPFSLGvKSOCoTG8xAcycEKOR+eeSSAfzs1e3lHdxo/17WHt79P5W3tO/nZNymMSEAxMezsbepO8y+Q484Gce6IrQ5hqwqsWUmkVQgaKhEYvosFbT4IHJl+vV30I4kyDlLGPGXMU8Y8Oc3P98p4zvoQvl4ZlvWkyliNro4iVDQX40pjIc4rc9iTd6SVm/7Bejl7JAMrhnKwEzUEvo/2tlN40HkJWkszTG4dmvqu4WyTBBnXt6rjEjg+ponSPf1FmPsgxUVV7prG/BiaqacQllp/GU36qwJBNB543KMvhFtXAHvHLr/t7Y4tBffS0Wt5hY2rZ6JZINgETnZ0SzDXmQZyum79PvPGtmi9rhS1uhIRXPulJL4CimmSYmIInLzxnh4qT6t3o0FXJnYWduG8yQP7u9SMRB+GHquoWEH2310l3P8B4M3c7jDaDNsAAAAASUVORK5CYII=",
            "price": 9634,
            "rating": 3.6
          }, {
            "id": 12,
            "fname": "Griffith",
            "lname": "Viole",
            "email": "vbomeb@free.fr",
            "language": "Zulu",
            "description": "Maternal care for (suspected) central nervous system malformation in fetus",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIdSURBVDjLpVNLa1NREP7uzb2hkSR2Yc2jxtKg2BYExY2C2RTBRXHfPyAu/ANZunYjLt24ElToShddiC1dSNWVSCE1bSJqsOTRxvTmvs/DOSdaQVexA8PMuWfuN/N9wzGklDiOmTimWb+Ter1+J47jB+QhmRcEgeP7fpf8g+d5HYoDijvkr6rVKvsHgAoe0o8gr1YqlUdjTzAcDm3qukpAz8ehYGw02TeKZ9yddRAAJhdugnMBpp0jZhws5ogoxrE6Mx2jUd5SADJnOUeIaitqMUK5kPrMKapcfeNC6JzwsVE7+LOFc8UMWh0X56ez+NJ2MFfK4vP3AQa+h2avj609H439GP0gxkIppSeMIgZjfTeiCYZodV2NrC5UR0Zumgx26iQuFNOw7AQ6gwh9J4QtfXBm4PXHLkzGRiMtXi7gxpUicRVYulpCGBFHM41y7gT6oYG9Q9LCSGD6dAZdZ6SR0sPSIlkSLze/gjHVWeDpWoMKJAI/QjJpg4VM8w/pfsJKgEmLhGZUz38BUNdb187i2VoTy4vlI0FX3rZHanNoSlpkA/BcF+lMUk9hRTEh2QLvtnuYyWfwZqutFRY0SRIcjs+RSSUR0kSWSVQOYsj9TzAdh2pmYIUR69Vceeqv/epcibnbDjBbyGoKh24I1q7h+lQHPxqbyDnzjjHua3xxb+l2vpC/PzV7aXL7/apn/M9zfnJ3brlQvvhYCJb6CQyniQeOtrI4AAAAAElFTkSuQmCC",
            "price": 9816,
            "rating": 3.8
          }, {
            "id": 13,
            "fname": "Marika",
            "lname": "Catlee",
            "email": "cgaitherc@google.fr",
            "language": "Azeri",
            "description": "Toxic effect of fiberglass, intentional self-harm, subsequent encounter",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJRSURBVBgZBcExiJZlHADw3/O+732enKYdQVeklWBeoSBFtmgNNrRcQ9DSFBQZDU4OEYSNbQUtCg5FEAUpDdXSUliBQRBEBBXeVuFZnvKd1/e9z/P/9/uVzATnX37wEfwCAICbpy6s7wUAACjnXnrgUbyFtV3Ld3vhjbO2rv8Alu465sOzr9veugUf4dKpC+sXAWDApWdeObNv+Z57/fPV+zJTm22BzHTiyD5LR0/KzLXPzr/3LC4CwID7l1fus/n7FTHetv7JO2QiXc8fpbTx83eWV4/tBgCAAbLORR11+w+LVmWmj9tpLUMEcPO3LeX401599/O8MVv59c/1vx67fG5te4Boo6ijGGfa7D+kNoQ3n1u1MQ0FkWlsYeiP+ODK5sN96a8++doXBweIOhOtkqEUMum7zo3b6Y+N1HVprOHWdvXUQzsdP7TX0qRb+TbbTx1EnYs618a5qE3UBvrC4sCkLyZ9sTjpXNvcduhOXnxijzrmgQFinMlxLmuIsZGpLaZSWOjJJPticehc/TdN/555fP8OC0NngKhzUZsYm6hBpMhUFH3XASVFJDt6pSv6vpcYIMcm503UJmojgABFEfrCZOiUTBFFKUUmA9SxamMTrYmxkURLBUNHVzqR9IUuMGHnQGYaIOdVjE22JmvISNCiYgAAAJGVKAZc3p5OT+zatyprE7WRicGsTrEXAADM6lSJrgx4++svP92NowBw7fDzFroD9iyOMulKUQpQ0Hd3iKzzkpkAAODkme+/6btykG6F3KIgQVFKZJvuWVrY+T+vNUkTODP9hQAAAABJRU5ErkJggg==",
            "price": 1242,
            "rating": 4.4
          }, {
            "id": 14,
            "fname": "Paola",
            "lname": "Waiter",
            "email": "whemphreyd@latimes.com",
            "language": "Bulgarian",
            "description": "Greenstick fracture of shaft of radius, unspecified arm",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANLSURBVDjLVZBrTFN3GMZPlpgli/Gb8ZNftkRE42VsWYxuJsZFzZKZmPjBDYzhw7ZothgciMplRWe4WMGQrRNEwMJA24rSFjBLa8uhVDqGba1QaksrlFvphV44pxekz95TtdGT/M755/2/z/Oe92EAMCt9zAeEiLAS/xIfCvV3odqmN/cmIudtnVnuYdYRdSuj+bOpgA6R0QKfSfmtoViT0hPBN+hHlMfYqPl0gJ8oD1K/idicMfB1M2UR08m55GIf/E8Kl/+T7Y3VGAL4Y9SH25aFDMK5nnXDIsvjwrYqLmb5dYl0Y8Q6xtvOVESt5cHFocJlY+fe1cYnM7hnnUcX+xKSnnE0ysfRrnWjyzyL1kEd7MrDa7xX/mrxYa6DtDnMVBPz1WTzR47hlp1cnc6NbtMMenQeuLwRBCIx+CMrcMxE0PGPC61DHtzrFcPatScx0bzhKWlzMkEU31ZdK71vQ7PBAxlNE55QOIwXcwuI01kglgZuql2Q6J2olLE402a8mslAeOU3jelLFDbcHHBggiZzq2nEOA5/trbBR0aBuWHYNEUw2L2olj2D0CtosgbHb7DBoq6nqP3bCh+fQiixhiRdXBRVofuBAmO9pxB0ymG3tOOcxAShV9BkDY5WDwR/bDFB1GbGTCxFJmvwhqP4XXwdd5t/ht/eidUVFyZUBbgi6YHQK2iyBkcqFfoTDTpUdYxh0BnGPC3tjaageayEnUQJvxqJ+XqEpvrQLz2L7xu0EDRZgwMld0TfiB7i7C0jamQO+CmwUDINz8h1BBwKJLyXwdZ8hlRQAXPrQZTUiiFosgb7fpF8TowfqlChqIlFrWwSFrMeHm0ZkktS8K5CsNWfIj5dirC7H/0NhxPfFV/enzUQ+OIH8U+nazq4ry88QKH4ETQtBVim4OIvi8G9OPEa50la5QamBxsxXJdX+Z6B0Wg8YLPZoNWxry5UlmCarUdy8a/MdM6ZTyvkZb68+wz4hV6wV3b4Bqu2b8uI1Wr1RiLmdDqhVKmC+vovo3xgCsmQFoklymBJ/g73sRp7jtmRTjwu2yLPGEil0vXEJJEkttPvBQzVu/mhq7t4msTTJF7/Wy6vq9ga15ZvS2su5aa1pZ/ENec/HvofoDruXRuQqRYAAAAASUVORK5CYII=",
            "price": 1938,
            "rating": 4.4
          }, {
            "id": 15,
            "fname": "Harold",
            "lname": "Pamela",
            "email": "pburlee@china.com.cn",
            "language": "Nepali",
            "description": "Chronic embolism and thrombosis of right tibial vein",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKISURBVDjLjdLNa1RXHMbx77lzZ+6dOBqZxMa3BBJBiG1alb4o4sZSceGiQl1VaBeluBV060pCKe0/UAqlrtUuisuKLVEQNMSFYqxpTFJjSJjEyWQy95x7zu/nIoqOL6XP7pzFh8NzHvPr76M/ipgvV52k1vN6tP1YjCEt8ss3n+89BRCLmhNHD/RuStPUGFPgv5IJBJ9z6cqDr4E1YNVKkiSpOX91iYwaDTNOf8885WIdr8Licpk7Dzrp0EFiujh9vJ8gxjxHY+chigpEBlw0R3/3PElpirpt4IMnThIGercw+c86Npa6EWl/VQwgQBQZrC5QKi7xpFXHhgznPV6bJElC05bpKkco2lbMC8AY1As25GTe0sotTjxBAJOjEogjg2p7qxGA6hqQsolGcx1KESsB6wPGlGg2KlRKWykUIlDzFiAyVArbeDTXQ1ar0KFV1psqfrGLuZktROt/Yio7Th5sO6AvA8V32Frew9LYEv72JIw9pHhvgb6uj7EhZ3v3IGcu7ieoNW0dqMJ47VuCCEGEnXaBOztSVBxOJrCtk2yr7mRw8yc0siaX/z224cIPtvLX6cWVWFUxwJG1YQFQGHrC7bHv+OzdrwgqBAkIymx9hqHtB1hxLW5N/1l//1xUjc0b9hrKG8m8I6gwVfubXDxecvKQs2wb7O49yEq+Gt2YHKnFadHUkbzzg559YMwzSsl8hg+eng19eAkEFR7Xp6lWNjM6c41rEyMLznPY/Pzb6PeiZr8LOvTyF1+pfdGZOYcTR+YdO7p3sW/gMDenrzMycX21YVc+mh3Wu+bVYbwt752Lmh/2Heq4ev+PR074dHZYxwH+NzBw1jSDFDpaEgbmh3Xy+f1Tcg5RdvF2jMwAAAAASUVORK5CYII=",
            "price": 9090,
            "rating": 4.2
          }, {
            "id": 16,
            "fname": "Jolynn",
            "lname": "Pamela",
            "email": "pheelisf@wunderground.com",
            "language": "Nepali",
            "description": "Unspecified disorder of refraction",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMxSURBVDjLTZNdaBxlFIafmd3tTmYnJU26TYgNbZoQ7GIMBH9iNQj1QimIFCL+EVEQQa+VXBQKBfVGIlL0QtDeBFEwFSlN0EaqgkaQ2tYG89OYxiaN2d1ssplNZmfONzv7ebEx9sC5fB/e874cQ2uNN26YwGngJCBAf+qEFu4ab9xoBi4BAfBy6oSeAzCKX5MA3k20vfTinvbX7vEXP8vPrrrzX9nnK0D3jn5qoPycmWlrycSTTYbMvvMXMNBwUi8buS84ZR0ZfNM69HxraXF08/byXPz71guOk4yoS1QB8EMT5Xsczw6UDx99hlhU8sozw8tAn6kE07AOWcX50c35hTlnsu1Lp71e0ej7yK0NvPkNnJJHS/0erjYP26uLk1asqa9R1x11lHDEWPiE/tCwP103Ow/+0vGN3WbHSZYj7u9spGGvicZgw434bXaNsC5GauM893qjktienk7q0guG1pq3z118P9Zw+K2OZocG0Tx7vJ2i61LwfNpaWwCoaPh8fIGqo8nmVyl48fc+fuWRUybAaqX1waqG6pbivq4myhVNIpFg4rtvKbkuoQiXJn4g07UfN+/jm/twVfJRgDiA+F53RRm4UqWpqQ6JNCnb5s7SEhOXf2Lqj+s88eRT7Dtgs1bw0Q0JxPe6dwHK9/DKSfyYgUS13vLuFinHYXstR+fBVm7duEZ2ZYW0FIndWWd/GDaeOXP5d3MHMFXaKmPEqyxmy0SGCaZF7wN9xEyDTCZDV1cXxWwWQpdMJkNPTw8i0mvunPBjyXXZCIRfr+VIJCFlJXis/xhhGFKpVAjDEK/sI0pQSiEiiAg1B4F30V3/Z3pmaZ1cMce50Tlur2xiSIhSandFBN8PdsUiUsvg57NvXHn49eGzHanND6YWK/b6lpDN5YlVTQ7cJQ5EiELRSilDa/0/AODDV4/drK+vt/OFYnR69GZsxrAxYxZPp2uAMAwxq4qqjgyR2p8ppWqAsbGxNHAhnU7jbbvudvHvj6Kqfhzolr1mo4gQBAFBEGittRGGIVprlFIYWmtGRkYc4ArQDvQODg7++Z+zoaGhG0qp7p0wJy3LeqhQKMR3gr36LzexzEk6GOJQAAAAAElFTkSuQmCC",
            "price": 8622,
            "rating": 3.2
          }, {
            "id": 17,
            "fname": "Mallissa",
            "lname": "Hew",
            "email": "holeszczakg@wikia.com",
            "language": "Bislama",
            "description": "Achilles tendinitis",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKzSURBVBgZBcFfqN5zHADg5/P9/d53/87OmdnU2jIttiGJEZO1SSh2YcWFXHCBEpIibsiVO3GhlhIXascF7maoiY200iSbIYZxmv3/55yd877v7/vxPJGZ7nplz6MLxuc9XMIGzEeAQAZZjWr9/eyp3B3nz7ywd/vWAUBkpntf+2bv+89suLqUWJI0EoBMSCf+G9rx3Vn/Hpmb+enAz0u/3r51DlooTazrt82Sg8c1JYIgK11Wo1G6OOxsuWqxW9a29tUTC7OuP7P56Z2XfPXWfXMFImIsM5t+U/QKbdAUmiCCIlCtGO/bevMKV1w5b0E7vug9KJAEFJSgRCgRSoQSoTTh6OmLVo8NXbM0PL7xUk2veRBagEzahhAyQu2SEtqGfha/nUqDOlLrwKY180RbRtBCJok2ipQSUUIgK9kUetXS39421h12sW4hVoECiYoISoQSoUSIDL0m9EoYO/KB1Uv/tmbzI5z+zFo/FChQR2RSkchMpFIoEeb/87FV7Zcm1t1k+q9degtWemr1F/1dz655qIVaU2aSpAQggd65703cep9u5qD5y1aZ7f6xesu1yszx7S10lS7JSgWQoCbD/krDM38qzUlRpvXHTzI747+jc00LdZRqple/HwipBplh5ewhD3rHxKKhOppV6lnKYjkc+HHysF9/OfVEC6NRp+tYMd5z42VFTZYd2+ny6Q+t3bhRDj4X3QUHPh0YTs9Z0g9vTj0wnJx8abKF0Vyto1pz0Ilvpzo10mPnPrF+0x0GJ7dr2wk/ftn5qPeks9ff443bSz343Ldz0MJwtju2qN8se/G6waLMLJL2h0Y0U5p5yx36YkZv3ZNevu1+Eer8frnQjeoUtBCRr9/9/J5tEXFDyoWwbXm/vfuPfc350yPvHr5zdGj/4s7kbpitte5vix3wP04jPQSDxpk/AAAAAElFTkSuQmCC",
            "price": 3722,
            "rating": 5.0
          }, {
            "id": 18,
            "fname": "Karlene",
            "lname": "Farleigh",
            "email": "fmayworthh@shinystat.com",
            "language": "Gagauz",
            "description": "Poisoning by antidiarrheal drugs, undetermined, subsequent encounter",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ+SURBVDjLpZNdSJNRGMeFoC50flVXBV1EoF3YdzKYG0u30FTsY9bQnLpqrSg/5uZe29RtimvkxBbCTJupmzpLl8tNxfwObUxTF2RQRNJFGOqFYELx/nt7LwaCzKKLH5zz8Px/POccThCAoP9hy+LNq+nVJZzdULMZULBCIGVGQpye2vhXAqlYVK5OiYIhMQx6Cg0vFDJ2CLLj9kGcJTRuKyAuxKKGCiqokIwmFPmcCOScDkPa0T3ktgJZbDjZa1Liq9uAcZMEGaciIGLuhZC5H4Lj4TDKrgQHFJgzD6yuvn+F5Tct+PbagumnRfjk0OC7z43W6wfX5ptu7QwouC9ielY8Nix5O7E+20bRTq9Xpttgzj3iDXgEvuJZMPt23Wht4UVseBvw4103zfpbK+qJ82BdezDCL7AythSw8+yRPIW1kaN+gaahBRRo69BaKEBvVjxERDNV+4Az5S/Bl7c/ji+whW8SMItcO/LrxyxcdQ/d9GT4I5INQxh0TWBKkoUUjRN6hw/C2jGwS7pJbp7FyJXZd/kFScVWXcbDcTg8i0jQusDTuSHQ92E2Iwnz2WlIrhoAt8yJVMMw1B2zuFw9RPLzGqr8ghlV1K8lpxKEbQa6rnm6Sah3w5aaAlVuMc5VuJBpmoDAOApJ/SSW+0oxWRS94RfMqaPJlQEtBDWjeNS/ACUlkrd4kW8aQEJZD+5aPJA2TKGyy4fEij6sDurgKT5M+gW+5jvENHHo5yXjCOI1vajs9tGUdc7hbGU/PdWfPeeeAyxFB2ZKYzaojG7TK3xulzIk2saYkzfMi1zqouKILrCUz2mYcjtYcjt5LMe0JlaZT3zpkDIC/sZ/4TfeSKfmHj5WOQAAAABJRU5ErkJggg==",
            "price": 4438,
            "rating": 4.2
          }, {
            "id": 19,
            "fname": "Annabell",
            "lname": "Sashenka",
            "email": "sivashevi@ftc.gov",
            "language": "Icelandic",
            "description": "Poisoning by antiviral drugs, undetermined, initial encounter",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALWSURBVDjLlZNbSFRRFIb/c8bLjM7NcUadvDZig1kgUVmBEpRplIj1ki/1XFAQXUAq6EL1UvSQFQk9FD4ERRGNZBcJ8UaQGgWpqSOOk46XyctxPHPOPmfvtoJCkUX7ZT+s9X2svdZeAmMM/3P6fV4fUVmZFNJ9RccGq2L+Cbz0uijgEgWMUsZOGUXLviSjA4Efg/sX438V+Bu99yFgL9NgI5SZLSa7GOybYqCqsKCwxlUFHMyjDJ+t7jKjLb0SAtMhjzRCHfsEq4kI/rGZiweuDF36o4DDBw3G5KfW1CrYnBsgB+ugR6ZApsbBBDOcOckITMxU89RfBRx08+uRyblpt8VVhViDAnm4FlSRecUKRJMRTJM54UCKOSZ3mYsZaPDmiQY06xrSknIOCfbMCqjh15BGW0BlGVqUi2YXEB/HEBfDwHQGSaZ0RaAp7J4zr9BtTSmHrvSDhO5CJLNgRMVcWAKJqCBRglqzHRGN4HysjtkIHV8REInlxyc6oUS+o7fDh7g4ilhmRjwPWm2xCIxJMPC/EjWqyHCux9mRLlRorHNZIMrztCHU8wWapiIhIRfBHitC4wm4rcXj6qSAB3Ybai28efY85KcVITPZi4fuaGXJDYd5USAs/sSWW552iztpe+7WcjTV+VB29DDOtDxBacER6IxCpzooGEKzQSQlpqDD/w6dgWYa1VTH0hSKT/p3vL3u6VOUV+vc3nyEBsfAg0vwcJj3hWrQKAHRCeYUCYWZxZgnC+KHodawuPyW0hq/d2Jo+nlkphcD3W1cEIXGR5NqzUKaNRtum4eP1gSXJR1dI21oG2ydXFCxWfh9mZ6dW1sGxhrrs0QoqgqVqkvVeJwF2ObZg4+BdjR9exNSNewavca+Cqtt4+PTOZdB2YWUNRZkpJlQPdyNjZk70dH7XpJAt3C4b6WJq536E9kGVWE1hOD4zfSgS2GiUDidUPLizlzLcs5P3E1ndhQ2sD8AAAAASUVORK5CYII=",
            "price": 8006,
            "rating": 4.7
          }, {
            "id": 20,
            "fname": "Kellia",
            "lname": "Morgan",
            "email": "mtrenholmej@seesaa.net",
            "language": "Assamese",
            "description": "Anaplastic large cell lymphoma, ALK-positive, extranodal and solid organ sites",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFCSURBVDjLpVOxSgNBFJxcrkmC+AV+gP5BwEKwtLESW0mZD7CyEyViJVhbG7DURvEXBAsDKgpGxIjIecnF29t9byyyAZu9wkz12HnMm3m7WyGJWRC3Dq7aq83FTpKzMcwyqFNYVczHNrvpDc5XmktrXz9siAJpksCKYK5qs9u7t+3T/fXjysn1q9TrtWhqhCSUAAkMR2PUGzWoAkqCBJST+qF3r4ft5Wo8toyy77En/zQpoSRSk/kaEH+mCoxyiQAARxcvDGHv7DnIbe1ekiQiUQ0uyIkEucJaAEAkUiLgwpzNvUDhyqa4sLiZcFHplBJxN41QNsWWOXDegTFFsMnkJixujI9QlOUMR1DxDopC/hVhentx//Gp2+rkG2IdksEHnDioE4goqOxv7uQLUjiIE6Sf76AI/NPpAkBl1t8YYUb8Ao9lHyy2IyRjAAAAAElFTkSuQmCC",
            "price": 4033,
            "rating": 4.4
          }]
          
      );
    return (
        <div>
            <Navbar />
            {teacher && teacher.map((t)=>(<Teacher key={t.id} teacher={t}/>))}
        </div>
    );
};

export default Teachers;
