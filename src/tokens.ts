import { Token } from '@lumino/coreutils';
import { ICreateJobModel, JobsView } from './model';

namespace Scheduler {

  export type EnvironmentParameterValue = string | number | boolean

  export type ErrorsType = { [key: string]: string; };

  export interface IAdvancedOptionsProps {
    jobsView: JobsView;
    model: ICreateJobModel | IJobDetailModel;
    handleModelChanged: (model: ICreateJobModel) => void;
    errors: ErrorsType;
    handleErrorsChanged: (errors: ErrorsType) => void;
  }

  export type IAdvancedOptions =
    React.FC<IAdvancedOptionsProps>;

  export const IAdvancedOptions = new Token<IAdvancedOptions>(
    '@jupyterlab/scheduler:IAdvancedOptions'
  );
}

export default Scheduler;