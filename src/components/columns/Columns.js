import _ from 'lodash';
import NestedComponent from '../nested/NestedComponent';

export default class ColumnsComponent extends NestedComponent {
  static schema(...extend) {
    return NestedComponent.schema({
      label: 'Columns',
      key: 'columns',
      type: 'columns',
      columns: [
        { components: [], width: 6, offset: 0, push: 0, pull: 0 },
        { components: [], width: 6, offset: 0, push: 0, pull: 0 }
      ],
      clearOnHide: false,
      input: false,
      tableView: false,
      persistent: false
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Columns',
      icon: 'fa fa-columns',
      group: 'layout',
      documentation: 'http://help.form.io/userguide/#columns',
      weight: 10,
      schema: ColumnsComponent.schema()
    };
  }

  get defaultSchema() {
    return ColumnsComponent.schema();
  }

  get schema() {
    const schema = _.omit(super.schema, 'components');
    schema.columns = [];
    this.eachComponent((component, index) => {
      _.merge(component.component, _.omit(this.component.columns[index], 'components'));
      schema.columns.push(component.schema);
    });
    for (let i = this.components.length; i < this.component.columns.length; i++) {
      schema.columns.push(this.component.columns[i]);
    }
    return schema;
  }

  get className() {
    return `row ${super.className}`;
  }

  addComponents() {
    const container = this.getContainer();
    container.noDrop = true;
    _.each(this.component.columns, (column) => {
      column.type = 'column';
      this.addComponent(column, container, this.data);
    });
  }
}
