import React, { useState, useEffect, useCallback } from "react";
import {
    PostSection,
    PostTitle,
    PostListDiv,
    LoadingDiv,
    PagenumberDiv,
    PagingSection,
    PostHeader,
} from "./styledComponent";
import EachPost from "./Communication_EachPost.js";
import axios from "axios";
import ComHeader from "./Communication_Header";
import Nav_communication from "./Nav_communication";
import Banner_communication from "./Banner_communication";
import Form_petiton from "./Petition/Form_petiton";
import Complete_Form from "./Complete_Form";

function Communication() {
    const [postList, setPostList] = useState([]); //postList 변수 정의하고 setPostList함수로 부른다.
    const [text, setText] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState([]);

    // const addPost = useCallback(() =>{
    //       setPostList((initialPostList) =>[
    //           ...initialPostList,
    //           {id:4, title:'한성학보, 시사N 대학기자상 취재'},
    //       ]);
    // },[postList]); //postList가 바뀌면 새로 바꿔주세요

    const getPostList = useEffect(() => {
        axios
            // 일단 notice 링크 걸어둠
            // 나중에 "http://127.0.0.1:8000/boards/petition"으로 수정
            .get("http://127.0.0.1:8000/boards/notice")
            .then((response) => {
                setText([...response.data]);
                console.log(response.data);
            })
            .catch((errors) => {
                console.log("error");
            });
    }, []);

    return (
        <>
            <Banner_communication />
            {/* <Form_petiton/> */}
            <Complete_Form />
            <Nav_communication />

            <PostSection>
                <PostTitle>청원 게시판</PostTitle>
                <ComHeader></ComHeader>
                <PostListDiv>
                    {text === null ? (
                        <LoadingDiv>아직 기록된 글이 없습니다</LoadingDiv>
                    ) : (
                        <table className="common-table">
                            <tbody>
                                {text.map((element) => (
                                    <tr>
                                        <EachPost
                                            postID={element.id}
                                            title={element.title}
                                            body={element.body}
                                        />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </PostListDiv>
            </PostSection>

            <PagingSection>
                <PagenumberDiv
                    onClick={() => {
                        if (page > 1) {
                            setPage(page - 1);
                        }
                    }}
                ></PagenumberDiv>
                {pages.map((pageNum) => (
                    //pageNum으로 넘김
                    <PagenumberDiv
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                    >
                        {pageNum}
                    </PagenumberDiv>
                ))}
                <PagenumberDiv
                    onClick={() => {
                        if (pages.length > page) {
                            setPage(page + 1);
                        }
                    }}
                ></PagenumberDiv>
            </PagingSection>
        </>
    );
}

export default Communication;
