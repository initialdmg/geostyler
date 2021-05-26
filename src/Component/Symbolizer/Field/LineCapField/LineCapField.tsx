/* Released under the BSD 2-Clause License
 *
 * Copyright © 2018-present, terrestris GmbH & Co. KG and GeoStyler contributors
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import * as React from 'react';

import {
  Select
} from 'antd';
const Option = Select.Option;

import {
    LineSymbolizer
} from 'geostyler-style';

import { localize } from '../../../LocaleWrapper/LocaleWrapper';
import en_US from '../../../../locale/en_US';

// i18n
export interface LineCapFieldLocale {
  butt?: string;
  round?: string;
  square?: string;
}

// default props
interface LineCapFieldDefaultProps {
  locale: LineCapFieldLocale;
  capOptions: LineSymbolizer['cap'][];
}

// non default props
export interface LineCapFieldProps extends Partial<LineCapFieldDefaultProps> {
  onChange?: (caps: LineSymbolizer['cap']) => void;
  cap?: LineSymbolizer['cap'];
}

/**
 * LineCapField to select between different line-cap options
 */
export class LineCapField extends React.Component<LineCapFieldProps> {

  public static defaultProps: LineCapFieldDefaultProps = {
    locale: en_US.GsLineCapField,
    capOptions: ['butt', 'round', 'square']
  };

  static componentName: string = 'LineCapField';

  getCapSelectOptions = () => {
    const { capOptions, locale } = this.props;
    return capOptions.map(capOpt => {
        return (
            <Option
                key={capOpt}
                value={capOpt}
            >
            {(locale && locale[capOpt]) || capOpt}
            </Option>
        );
    });
  }

  render() {
    const {
      cap,
      onChange
    } = this.props;

    return (
      <Select
        className="editor-field line-cap"
        value={cap}
        onChange={onChange}
      >
        {this.getCapSelectOptions()}
      </Select>
    );
  }
}

export default localize(LineCapField, LineCapField.componentName);
