import React from 'react'
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconImportContacts from '@material-ui/icons/ImportContacts'
import IconClose from '@material-ui/icons/Close'

import AttachesBase from './attaches/attaches'
import HistoryBase from './history/history'
import InformationBase from './information/information'
import styles from './styles'
import withVisible from './with-visible'

const Attaches = withVisible(AttachesBase)
const History = withVisible(HistoryBase)
const Information = withVisible(InformationBase)

const Document = ({initiator, classes, code, name, history, attaches}) => {
  const [isOpen, setIsOpen] = React.useState(false) 
  const [selectedTab, setSelectedTab] = React.useState(0)

  return (
    <Card className={classes.root}>
      <CardHeader 
        title={code == null ? `New document ${name}` : `Document #${code} ${name}`}
        subheader={initiator}
        action={isOpen ? (
          <IconButton onClick={() => setIsOpen(false)} aria-label="settings">
            <IconClose />
          </IconButton>
        ) : (
          <IconButton onClick={() => setIsOpen(true)} aria-label="settings">
            <IconImportContacts />
          </IconButton>
        )}
      />
      <Tabs 
        value={selectedTab} 
        onChange={(event, newValue) => setSelectedTab(newValue)} 
        aria-label="document navigation"
      >
        <Tab label="History" />
        <Tab label="Attaches" />
        <Tab label="Information" />
      </Tabs>
      <History visible={selectedTab === 0} history={history} />
      <Attaches visible={selectedTab === 1} attaches={attaches} />
      <Information visible={selectedTab === 2} />
      
    </Card>
  )
}

Document.propTypes = {
  /** Document code */
  code: PropTypes.number,
  initiator: PropTypes.string.isRequired,
  name: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired
  }).isRequired,
}

Document.defaultProps = {
  name: ''
}

export default styles(Document)