import React, { memo } from 'react';
import cl from "./FileList.module.scss";
import FileInput from '../FileInput/FileInput';
import FileIcon from "../../../assets/img/file.svg";
import Badge from '../Badge/Badge';
import GlobalSvgSelector from '../../../utils/globalSvgSelector';
import { availableExtensions } from '../../../data/data';
import { getMatchMediaQuery } from '../../../utils/getMatchMediaQuery';

const match = getMatchMediaQuery(450);

const FileList = ({ fileData: { addFileHandler, files, removeFileHandler, isLoading } }) => {
    return (
        <div className={cl.wrapper}>
            <FileInput 
                isImage={true} 
                addFileHandler={addFileHandler} 
                extensions={availableExtensions} 
                isLoading={isLoading} 
            />
            <div className={cl.box}>
                {
                    files.length ? files.map((file) => {
                        return (

                            <div className={cl.boxItem} key={file.fileId}>
                                <img className={cl.img} src={FileIcon} alt="" />
                                <div className={cl.content}>
                                    <div className={cl.top}>
                                        <Badge content={file.extension} />
                                        <Badge content={file.size} />
                                    </div>
                                    <div className={cl.title}>{file.title}</div>
                                </div>
                                <button 
                                    className={isLoading ? `${cl.btn} ${cl.loading}` : cl.btn} 
                                    disabled={isLoading}
                                    onClick={() => removeFileHandler(file.fileId)}
                                    style={{ flex: match ? "0 0 36px" : "" }}
                                >
                                    <GlobalSvgSelector className={cl.trash} svgname="deleteFileIcon" />
                                </button>
                            </div>

                        )
                    }) : <div 
                            style={{
                                opacity: isLoading ? 0.5 : 1,
                                pointerEvents: isLoading ? 'none' : 'auto',
                            }}>
                                Файлы не добавлены
                        </div>
                }
            </div>
        </div>
    );
}

export default memo(FileList);
