# Entity-Reference-Dependable
Entity Reference Dependable. This module provides a widget and a views display. A defined control field via the widget will decide how the data of this field to be choose.

New feature:
- It supports field_reference for now.

How to use
A. For Entity Reference
1. Add an Entity Reference Dependable Data for data to be chosen. Some points need to be setup:
- A Contextual Filter that holds the input. The views will render the output selectable records based on this.
- Add nid and exclude these out of the display.
2. Change widget type of entityreference to Entity Reference Dependable widget.
3. Set control_field correctly(Ex: field_project, field_ticket_project, etc...).


B. For Field Reference
1. Enable Granularity in the widget setting to Entity, Revision, Language and Value. Please choose only one field to reference.
2. Set number of items to unlimited
3. In the Entity Reference Dependable views's display, remember to add the field delta, and nid. Also do exclude these out of the views. The code will handle the rest automatically.
4. Change the field reference's widget type to Entity Reference Dependable
5. Setup like A.3.
Notice: In target project/content, please do not change the delta of the reference field data(ex: address), it will change how data is stored.


New feature:
1. It allows to use argument from URL to replace to control_field. Edit the field and put number argument to the checkbox "Use URL argument".
2. It allows to use token of current entity to load data from other. By this, we can refer to host entity of a field token. Edit the field and navigate to "Entity token" text field.

Install:
- It need field_reference module with a patch that is stored together with this module. Please apply this patch to field_reference if you want to use it for case B.
