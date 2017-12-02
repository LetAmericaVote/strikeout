import React from 'react';
import PropTypes from 'prop-types';
import ActionTileBlock from '../ActionTileBlock';

import './action-tile-block-list.scss';

const ActionTileBlockList = (props) => {
  const { actionTileBlocks } = props;

  if (! actionTileBlocks) {
    return null;
  }

  return (
    <div className="action-tile-block-list">
      {actionTileBlocks.map(actionTileBlock => (
        <ActionTileBlock
          key={actionTileBlock.sys.id}
          {...actionTileBlock.fields}
        />
      ))}
    </div>
  );
};

ActionTileBlockList.propTypes = {
  actionTileBlocks: PropTypes.arrayOf(PropTypes.shape({
    sys: PropTypes.shape({
      id: PropTypes.string,
    }),
    fields: PropTypes.shape(ActionTileBlock.propTypes),
  })),
};

ActionTileBlockList.defaultProps = {
  actionTileBlocks: null,
};

export default ActionTileBlockList;
