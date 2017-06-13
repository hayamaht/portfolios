import * as React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import './About.css';

const About = () => {
    return (
        <CSSTransitionGroup
            transitionName="page"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={300}
            transitionEnter={false}
        >
            <div className="about">
                <h1 className="sitename sitename-white">
                    <Link to="/">{'{ hayama }'}</Link>
                </h1>
                <h2>About</h2>
                <div className="submenu" />
                <div className="content">
                    <h3>SUNBEAM YEH</h3>
                    <div className="desc">
                        <p>
                            美們大的慢師天式標表洋子前可華息產感山解緊式復為是：且作成心打如意南時千進然個他後有巴勢前提產一管現從身接間持，人留教裡女一多：布活才從區把此師半晚怕？發酒的年火物：交頭大假外。件二化包頭務經？看參南密二要，了有從一次方頭子克小情；之去據不明了們麼銀間服有錯！
                        </p>
                        <p>
                            但聯覺神一對今日小作走功是張？過圖合消發！為有成說呢說在策望自我整裡，可一者求的種，子新。
                        </p>
                        <p>
                            放其國如覺是了必長術？林子法國容結對那。放務你地，好的拉始最即畫童卻然照這吃念基情法程陽今大，管謝空不，辦識常人！年地速不……對待於實十很，古源制事這過。
                        </p>
                        <p>
                            為臉案不然陸學司光家長基沒溫比需持火面人品，治毛解民化的前天經保政時！前畫子腦園色長著良，沒在園。地片不銀小長白；得大分小心詩，太一青？要東提那善……照例人乎賽過生什性說子可康建神放竟們民詩始：起很府告業安是就的活！個他個畫管夫。
                        </p>
                        <p>
                            你加生爭由河要之非如草優戲文畫學產；可邊起少並注。排深種麼為石反兒雜合雲力生火是……洲確我嗎方轉？風家市就打去害進不和。
                        </p>
                    </div>
                </div>
            </div>
        </CSSTransitionGroup>
    );
};

export default About;