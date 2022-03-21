import React, { Component } from 'react'
import styled from "styled-components";
import fonts from '../css/fonts.css'

// Importacion Imagenes 
import photosnap from '../images/photosnap.svg'
import manage from '../images/manage.svg'
import account from '../images/account.svg'
import myhome from '../images/myhome.svg'
import loopStudios from '../images/loop-studios.svg'
import faceIt from '../images/faceit.svg'
import shortly from '../images/shortly.svg'
import insure from '../images/insure.svg'
import eyecam from '../images/eyecam-co.svg'
import airFilter from '../images/the-air-filter-company.svg'
// Fin importacion imagenes

export default class Jobs extends Component {
    render() {
        return (
            <CenterAll>
                <JobCard>
                    {/* <FeaturedLine>
                            <img src='https://i.ibb.co/kMVhpXC/imagen-2022-03-20-193930.png' alt=""/>
                        </FeaturedLine> */}
                    <DivRow>
                        <Img src={photosnap} alt="" />
                        <TextContent>
                            <TextSpace>
                                <NameBusiness>Photosnap</NameBusiness>
                                <New>NEW!</New>
                                <Featured>FEATURED</Featured>
                            </TextSpace>

                            <TitleJob>Senior Frontend Developer</TitleJob>

                            <TextSpace>
                                <GreyText>1d ago</GreyText>
                                <GreyText>Full time</GreyText>
                                <GreyText>USA only</GreyText>
                            </TextSpace>
                        </TextContent>
                    </DivRow>

                    <Hr/>

                    <TextRight>
                        <TextBox>Frontend</TextBox>
                        <TextBox>Senior</TextBox>
                        <TextBox>HTML</TextBox>
                        <TextBox>CSS</TextBox>
                        <TextBox>JavaScript</TextBox>
                    </TextRight>

                </JobCard>

                <JobCard>
                    <DivRow>
                        <Img src={manage} alt="" />
                        <TextContent>
                            <TextSpace>
                                <NameBusiness>Manage</NameBusiness>
                                <New>NEW!</New>
                                <Featured>FEATURED</Featured>
                            </TextSpace>

                            <TitleJob>Fullstack Developer</TitleJob>

                            <TextSpace>
                                <GreyText>1d ago</GreyText>
                                <GreyText>Part time</GreyText>
                                <GreyText>Remote</GreyText>
                            </TextSpace>
                        </TextContent>
                    </DivRow>


                    <TextRight>
                        <TextBox>Frontend</TextBox>
                        <TextBox>Midweight</TextBox>
                        <TextBox>Python</TextBox>
                        <TextBox>React</TextBox>
                    </TextRight>

                </JobCard>
                
                <JobCard>
                    <DivRow>
                        <Img src={account} alt="" />
                        <TextContent>
                            <TextSpace>
                                <NameBusiness>Account</NameBusiness>
                                <New>NEW!</New>
                            </TextSpace>

                            <TitleJob>Junior Frontend Developer</TitleJob>

                            <TextSpace>
                                <GreyText>2d ago</GreyText>
                                <GreyText>Part time</GreyText>
                                <GreyText>USA only</GreyText>
                            </TextSpace>
                        </TextContent>
                    </DivRow>


                    <TextRight>
                        <TextBox>Frontend</TextBox>
                        <TextBox>Junior</TextBox>
                        <TextBox>JavaScript</TextBox>
                        <TextBox>React</TextBox>
                        <TextBox>Sass</TextBox>
                    </TextRight>

                </JobCard>
                <JobCard>
                    <DivRow>
                        <Img src={myhome} alt="" />
                        <TextContent>
                            <TextSpace>
                                <NameBusiness>MyHome</NameBusiness>
                            </TextSpace>

                            <TitleJob>Junior Frontend Developer</TitleJob>

                            <TextSpace>
                                <GreyText>5d ago</GreyText>
                                <GreyText>Contract</GreyText>
                                <GreyText>USA only</GreyText>
                            </TextSpace>
                        </TextContent>
                    </DivRow>


                    <TextRight>
                        <TextBox>Frontend</TextBox>
                        <TextBox>Junior</TextBox>
                        <TextBox>CSS</TextBox>
                        <TextBox>JavaScript</TextBox>
                    </TextRight>

                </JobCard>
                <JobCard>
                    <DivRow>
                        <Img src={loopStudios} alt="" />
                        <TextContent>
                            <TextSpace>
                                <NameBusiness>Loop Studios</NameBusiness>
                            </TextSpace>

                            <TitleJob>Software Engineer</TitleJob>

                            <TextSpace>
                                <GreyText>1w ago</GreyText>
                                <GreyText>Full time</GreyText>
                                <GreyText>Worldwide</GreyText>
                            </TextSpace>
                        </TextContent>
                    </DivRow>


                    <TextRight>
                        <TextBox>Fullstack</TextBox>
                        <TextBox>Midweight</TextBox>
                        <TextBox>JavaScript</TextBox>
                        <TextBox>Ruby</TextBox>
                        <TextBox>Sass</TextBox>
                    </TextRight>

                </JobCard>

                <JobCard>
                    <DivRow>
                        <Img src={faceIt} alt="" />
                        <TextContent>
                            <TextSpace>
                                <NameBusiness>FaceIt</NameBusiness>
                            </TextSpace>

                            <TitleJob>Junior Backend Developer</TitleJob>

                            <TextSpace>
                                <GreyText>2w ago</GreyText>
                                <GreyText>Full time</GreyText>
                                <GreyText>UK only</GreyText>
                            </TextSpace>
                        </TextContent>
                    </DivRow>


                    <TextRight>
                        <TextBox>Backend</TextBox>
                        <TextBox>Junior</TextBox>
                        <TextBox>Ruby</TextBox>
                        <TextBox>RoR</TextBox>
                    </TextRight>

                </JobCard>

                <JobCard>
                    <DivRow>
                        <Img src={shortly} alt="" />
                        <TextContent>
                            <TextSpace>
                                <NameBusiness>Shortly</NameBusiness>
                            </TextSpace>

                            <TitleJob>Junior Developer</TitleJob>

                            <TextSpace>
                                <GreyText>2w ago</GreyText>
                                <GreyText>Full time</GreyText>
                                <GreyText>Worldwide</GreyText>
                            </TextSpace>
                        </TextContent>
                    </DivRow>


                    <TextRight>
                        <TextBox>Frontend</TextBox>
                        <TextBox>Junior</TextBox>
                        <TextBox>HTML</TextBox>
                        <TextBox>JavaScript</TextBox>
                        <TextBox>Sass</TextBox>
                    </TextRight>

                </JobCard>

                <JobCard>
                    <DivRow>
                        <Img src={insure} alt="" />
                        <TextContent>
                            <TextSpace>
                                <NameBusiness>Insure</NameBusiness>
                            </TextSpace>

                            <TitleJob>Junior Frontend Developer</TitleJob>

                            <TextSpace>
                                <GreyText>2w ago</GreyText>
                                <GreyText>Full time</GreyText>
                                <GreyText>USA only</GreyText>
                            </TextSpace>
                        </TextContent>
                    </DivRow>


                    <TextRight>
                        <TextBox>Frontend</TextBox>
                        <TextBox>Junior</TextBox>
                        <TextBox>JavaScript</TextBox>
                        <TextBox>Vue</TextBox>
                        <TextBox>Sass</TextBox>
                    </TextRight>

                </JobCard>

                <JobCard>
                    <DivRow>
                        <Img src={eyecam} alt="" />
                        <TextContent>
                            <TextSpace>
                                <NameBusiness>Eyecam Co.</NameBusiness>
                            </TextSpace>

                            <TitleJob>Full Stack Engineer</TitleJob>

                            <TextSpace>
                                <GreyText>3w ago</GreyText>
                                <GreyText>Full time</GreyText>
                                <GreyText>Worldwide</GreyText>
                            </TextSpace>
                        </TextContent>
                    </DivRow>


                    <TextRight>
                        <TextBox>Fullstack</TextBox>
                        <TextBox>Midweight</TextBox>
                        <TextBox>JavaScript</TextBox>
                        <TextBox>Python</TextBox>
                        <TextBox>Django</TextBox>
                    </TextRight>

                </JobCard>

                <JobCard>
                    <DivRow>
                        <Img src={airFilter} alt="" />
                        <TextContent>
                            <TextSpace>
                                <NameBusiness>The Air Filter Company</NameBusiness>
                            </TextSpace>

                            <TitleJob>Front-end Dev</TitleJob>

                            <TextSpace>
                                <GreyText>1mo ago</GreyText>
                                <GreyText>Part time</GreyText>
                                <GreyText>Worldwide</GreyText>
                            </TextSpace>
                        </TextContent>
                    </DivRow>


                    <TextRight>
                        <TextBox>Frontend</TextBox>
                        <TextBox>Junior</TextBox>
                        <TextBox>JavaScript</TextBox>
                        <TextBox>React</TextBox>
                        <TextBox>Sass</TextBox>
                    </TextRight>

                </JobCard>
            </CenterAll>

        )
    }
}

const Hr = styled.hr`
    display: none;
    @media (max-width: 1200px){
        width: 100%;
        margin: 0 20px;
        display: block;
    }
`

const CenterAll = styled.div`
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            margin-bottom: 6.5em;
        
        `

const Img = styled.img`
    width: 100px;
    margin: 20px 30px 20px 50px;
    @media (max-width: 560px){
        width: 50px;
        margin-top: -26px;
        margin-left: 13px;
    }

`
const JobCard = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'Spartan', sans-serif;
    border-radius: 6px;
    width: 84%;
    box-shadow: 0px 4px 20px hsl(180, 29%, 50%);
`

const NameBusiness = styled.h5`
    color: hsl(180, 29%, 50%);
`

const New = styled.h5`
    padding: 5px 8px;
    border-radius: 20px;
    color: #fff;
    background-color: hsl(180, 29%, 50%);
`

const Featured = styled.h5`
    padding: 5px 8px;
    border-radius: 20px;
    color: #fff;
    background-color: #000;
`
const FeaturedLine = styled.div`
    height: 100%;
    width: 2px;
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
`


const DivRow = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 20px;
`

const TextSpace = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
    height: 30px;
    margin: 10px 0;
`
const TextRight = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 30px 20px;
`

const TitleJob = styled.h3`
    @media screen and (max-width: 338px){
        margin: 40px 0 5px 0;
}
`

const GreyText = styled.p`
    color: grey;
`

const TextBox = styled.p`
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    color: hsl(180, 29%, 50%);
    background-color: hsl(180, 31%, 95%);
`