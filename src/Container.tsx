import React from "react";
import { Subscribe, Container } from "unstated";
import { Button, Dialog } from "@kintone/kintone-ui-component";

interface AppContainerState {
  showDialog: boolean;
}

class AppContainer extends Container<AppContainerState> {
  state = {
    showDialog: false
  };

  openDialog() {
    this.setState({ showDialog: true });
  }

  closeDialog() {
    this.setState({ showDialog: false });
  }
}

export default function() {
  return (
    <Subscribe to={[AppContainer]}>
      {(container: AppContainer) => (
        <div>
          <Button text="Click ME!" onClick={() => container.openDialog()} />
          {container.state.showDialog && (
            <Dialog
              hdeader="Hello!"
              content="This is Dialog Parts"
              onClose={() => container.closeDialog()}
            />
          )}
        </div>
      )}
    </Subscribe>
  );
}
