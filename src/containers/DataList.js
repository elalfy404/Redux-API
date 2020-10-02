import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDataList } from "../actions/dataActions";

const DataList = (props) => {
    const dispatch = useDispatch();
    const dataList = useSelector((state) => state.dataReducers);
    useEffect(() => {
        dispatch(GetDataList(props));
    }, [dispatch, props]);

    const ShowData = () => {
        if (dataList.loading) {
            return <h3>Loading...</h3>;
        }
        if (dataList.error) {
            return <div>error</div>;
        }

        return (
            <div className={"list-wrapper"}>
                {dataList.data.map((el) => {
                    return (
                        <div className={"card"} key={el.pkID}>
                            <div className="card_img">
                                <img src={el.Logo} alt={el.Name} />
                            </div>
                            <h2>{el.Name}</h2>
                            <div className="center">
                                <button type="button">تبرع الان</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return <>{ShowData()}</>;
};

export default DataList;
