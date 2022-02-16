import React from "react";
import './preview.styles.scss'
import PreviewItem from "../preview-item/previewItem.component";

const CollectionPreview = ({title, items}) => {
    return (
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items.filter((item, index) => index < 4).map((item) => (
            <PreviewItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
} 

export default CollectionPreview
