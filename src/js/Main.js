/**
 *
 */
import {mwf} from "vfh-iam-mwf-base";
import {GenericDialogTemplateViewController} from "vfh-iam-mwf-base";

/* dynamically loaded application libraries: the main application class */
import ContentTaggerApplication from "./ContentTaggerApplication.js";
/* dynamically loaded application libraries: view controllers */
/* ... for generic elements */
import TagSelectionDialogViewController from "./controller/TagSelectionDialogViewController.js";
import SidemenuViewController from "./controller/SidemenuViewController.js";
import MapViewController from "./controller/MapViewController.js";
/* ... for tags */
import TagsOverviewViewController from "./controller/TagsOverviewViewController.js";
import TaggableOverviewViewController from "./controller/TaggableOverviewViewController.js";
/* ... for notes */
import NotesOverviewViewController from "./controller/NotesOverviewViewController.js";
import NotesEditviewViewController from "./controller/NotesEditviewViewController.js";
import NotesReadviewViewController from "./controller/NotesReadviewViewController.js";
/* ... for places */
import PlacesOverviewViewController from "./controller/PlacesOverviewViewController.js";
import PlacesEditviewViewController from "./controller/PlacesEditviewViewController.js";
// TODO-REPEATED: import any further view controllers here

// we export the framework modules required by the application and the application modules required by the framework
mwf.app.components = {
    /* we need to provide the generic view controller as part of the classes that will be instantiated by the framework */
    GenericDialogTemplateViewController,
    /* application modules */
    ContentTaggerApplication,
    TagSelectionDialogViewController,
    SidemenuViewController,
    MapViewController,
    TagsOverviewViewController,
    TaggableOverviewViewController,
    NotesOverviewViewController,
    NotesEditviewViewController,
    NotesReadviewViewController,
    PlacesOverviewViewController,
    PlacesEditviewViewController
    // TODO-REPEATED: export any further view controllers here
}

// then start the application
window.onload = () => {
    mwf.onloadApplication();
}


