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
export interface LineJoinFieldLocale {
  bevel?: string;
  round?: string;
  miter?: string;
}

// default props
interface LineJoinFieldDefaultProps {
  locale: LineJoinFieldLocale;
  joinOptions: LineSymbolizer['join'][];
}

// non default props
export interface LineJoinFieldProps extends Partial<LineJoinFieldDefaultProps> {
  onChange?: (caps: LineSymbolizer['join']) => void;
  join?: LineSymbolizer['join'];
}

/**
 * LineJoinField to select between different line-join options
 */
export class LineJoinField extends React.Component<LineJoinFieldProps> {

  public static defaultProps: LineJoinFieldDefaultProps = {
    locale: en_US.GsLineJoinField,
    joinOptions: ['miter', 'round', 'bevel']
  };

  static componentName: string = 'LineJoinField';

  getJoinSelectOptions = () => {
    const { joinOptions, locale } = this.props;
    return joinOptions.map(joinOpt => {
        return (
            <Option
                key={joinOpt}
                value={joinOpt}
            >
            {(locale && locale[joinOpt]) || joinOpt}
            </Option>
        );
    });
  }

  render() {
    const {
      join,
      onChange
    } = this.props;

    return (
      <Select
        className="editor-field line-join"
        value={join}
        onChange={onChange}
      >
        {this.getJoinSelectOptions()}
      </Select>
    );
  }
}

export default localize(LineJoinField, LineJoinField.componentName);
